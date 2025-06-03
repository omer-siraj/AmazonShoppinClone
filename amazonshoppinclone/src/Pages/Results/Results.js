import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import LayOut from '../../Components/LayOut/LayOut'; // ✅ CORRECT PATH
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductsCard from '../../Components/Product/ProductCard';
import { useParams } from 'react-router-dom';


const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products/category/${categoryName}`) 
    // axios
    //   .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch category products:', err);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category: {categoryName}</p>
        <hr />
        <div className={classes.products__container}>
          {results.length > 0 ? (
            results.map((product) => (
              <ProductsCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))
          ) : (
            <p style={{ padding: '30px' }}>No products found in this category.</p>
          )}
        </div>
      </section>
    </LayOut>
  );
};

export default Results;
