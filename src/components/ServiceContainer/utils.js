export const parseResponse = (response) => {
  // console.log(response.result.images[0])
  return response.result.images[0].objects.collections[0].objects
};

export const getDetectedObjects = (response) => {
  // console.log(response)
  return response
}