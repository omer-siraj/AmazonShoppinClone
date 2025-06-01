import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'; 


const CarouselEffect = () => {
  return (
    <div className={classes.hero__img}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Slide ${index}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
