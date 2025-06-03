import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import Carousel from '../../Components/Carousel/CarouselEffect';
import Category from '../../Category/Category';
import Product from '../../Products/Products';

const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;
