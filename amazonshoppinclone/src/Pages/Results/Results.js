import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard'; // ✅ Make sure this path is correct
import { productUrl } from '../../Api/endPoints';

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>Category: {categoryName}</p>
        <hr />
        <div className={classes.products__container}>
          {results?.length > 0 ? (
            results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p style={{ padding: '30px' }}>No products found for this category.</p>
          )}
        </div>
      </section>
    </LayOut>
  );
};

export default Results;
