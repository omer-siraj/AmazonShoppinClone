import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import LayOut from '../../Components/LayOut/LayOut';
import Loader from '../../Components/Loader/Loader';



const ProductDetail = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProducts] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
};

export default ProductDetail;
