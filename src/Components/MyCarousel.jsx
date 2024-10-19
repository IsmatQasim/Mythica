import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Replace with actual image imports or links
import slide1 from '../Images/slide1.png';
import slide2 from '../Images/slide2.png';
import slide3 from '../Images/slide3.png';

// Rename the custom component to MyCarousel to avoid conflicts
const MyCarousel = () => {
  return (
    <div className="carousel-container w-full h-[calc(100vh-80px)] overflow-hidden"> {/* Subtract 80px from height to account for navbar/header */}
      <Carousel className="h-full">
        <Carousel.Item className="h-full">
          <img
            className="w-full h-full object-cover"  // Cover full width and height
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="h-full">
          <img
            className="w-full h-full object-cover"  // Ensure the image covers the full width and height
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item className="h-full">
          <img
            className="w-full h-full object-cover"  // Make sure the image covers the container fully
            src={slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
