import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.products__container}>
      {products.map((singleProduct) => (
        <ProductCard
          key={singleProduct.id}
          product={singleProduct}
          renderAdd={true}
        />
      ))}
    </section>
  );
};

export default Product;
