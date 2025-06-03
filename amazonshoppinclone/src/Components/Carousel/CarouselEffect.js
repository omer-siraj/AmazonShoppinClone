import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './data'; // ✅ renamed to avoid conflict
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`slide-${index}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
