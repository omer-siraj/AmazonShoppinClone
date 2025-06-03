
import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import Carousel from '../../Components/Carousel/CarouselEffect';
import Category from '../../Components/Category/Category';
import Products from '../../Components/Product/Product'; // ✅ Match file name here

const Landing = () => {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Products /> {/* Not <Product /> */}
    </LayOut>
  );
};

export default Landing;

