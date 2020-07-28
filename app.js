const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v4');
const { IamAuthenticator } = require('ibm-watson/auth');
const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const uuid = require('uuid');
const os = require('os');

require('./config/express')(app);

/**
 * Parse a base 64 image and return the extension and buffer
 * @param  {String} imageString The image data as base65 string
 * @return {Object}             { type: String, data: Buffer }
 */
const parseBase64Image = (imageString) => {
  const matches = imageString.match(/^data:image\/([A-Za-z-+/]+);base64,(.+)$/);
  const resource = {};

  if (matches.length !== 3) {
    return null;
  }

  resource.type = matches[1] === 'jpeg' ? 'jpg' : matches[1];
  resource.data = new Buffer(matches[2], 'base64');
  return resource;
};

let client;
try {
  client = new VisualRecognitionV4({
    // Remember to place the credentials in the .env file. Read the README.md file!
    version: '2020-07-20',
    authenticator: new IamAuthenticator({
      apikey: process.env.WATSON_VISION_COMBINED_APIKEY,
    }),
    url: process.env.WATSON_VISION_COMBINED_URL,
    disableSslVerification: true,
  });
} catch (err) {
  console.error('Error creating service client: ', err);
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.post('/api/classify', async (req, res, next) => {
  let imageFile;
  if (req.body.image_file) {
    imageFile = fs.createReadStream(`${process.env.PUBLIC_URL}/${req.body.image_file}`);
  } else if (req.body.image_data) {
    const resource = parseBase64Image(req.body.image_data);
    const temp = path.join(os.tmpdir(), `${uuid.v4()}.${resource.type}`);
    fs.writeFileSync(temp, resource.data);
    imageFile = fs.createReadStream(temp);
  }
  const params = {
    imagesFile: imageFile,
    collectionIds: ['d3122eb9-46c9-4f9e-97bb-572edfe60256'],
    features: ['objects'],
    threshold: '0.3',
  };
  try {
    const response = await client.analyze(params);
    // console.log(JSON.stringify(response.result, null, 2));
    res.json(response);
  } catch (err) {
    console.error(err);
    if (!client) {
      const error = {
        title: 'Invalid credentials',
        description:
          'Could not find valid credentials for the Visual Recognition service.',
        statusCode: 401,
      };
      next(error);
    }
    next(err);
  }
});

// error-handler settings for all other routes
require('./config/error-handler')(app);

module.exports = app;
