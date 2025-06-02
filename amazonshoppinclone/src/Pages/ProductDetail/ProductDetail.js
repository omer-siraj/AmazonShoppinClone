
import React, { useEffect, useState } from 'react'; // ✅ Missing useState import
import classes from './ProductDetail.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';

const ProductDetail = () => {
  const { productId } = useParams(); // ✅ useParams should be called as a function
  const [product, setProduct] = useState({}); // ✅ Correct useState syntax

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]); // ✅ productId should be a dependency

  return (
    <LayOut>
      <ProductCard product={product} />
    </LayOut> // ✅ Fix casing from Layout to LayOut
  );
};

export default ProductDetail;
