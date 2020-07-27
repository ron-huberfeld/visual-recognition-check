import React, { useState } from 'react';
import { Tile } from 'carbon-components-react';
import { Carousel } from 'react-responsive-carousel';
import Loader from '../Loader/Loader';
import DetectionBox from '../DetectionBox/DetectionBox';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselContainer = ({
  isClassifying,
  images,
  onSubmitImage,
  results,
}) => {
  const [mainDisplayImage, setMainDisplayImage] = useState('');

  const createCarouselItemImage = (image, index) => (
    <div key={index}>
      <img alt={image.alt} src={image.url} />
      <p className="legend">Legend {index + 1}</p>
      {isClassifying ? <Loader /> : null}
      {isClassifying ? null : <DetectionBox results={results} />}
    </div>
  );

  const baseChildren = <div>{images.map(createCarouselItemImage)}</div>;

  const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: true,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 5000,
    transitionTime: 150,
    swipeScrollTolerance: 5,
  });

  const handleChange = (imageIndex) => {
    console.log(`display ${imageIndex}`);
    const selectedImage = images[imageIndex].url;
    onSubmitImage({ image_file: selectedImage });
    setMainDisplayImage(selectedImage);
    console.log(results)
  };

  return (
    <Tile className="input-container">
      <Carousel
        width="100%"
        onChange={(current) => handleChange(current)}
        {...getConfigurableProps()}
      >
        {baseChildren.props.children}
      </Carousel>
    </Tile>
  );
};

export default CarouselContainer;
