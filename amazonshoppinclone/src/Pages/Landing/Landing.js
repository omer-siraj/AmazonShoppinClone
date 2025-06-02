import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
// import Header from '../../Components/Header/Header'
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'


const Landing = () => {
  return (
    <LayOut>
        {/* <Header/> */}
        <CarouselEffect/>
        <Category/>
        <Product/>

    </LayOut>
  )
}

export default Landing