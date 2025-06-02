// import React, { useEffect, useState } from 'react';
// import classes from './Results.module.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ProductCard from '../../Components/Product/ProductCard'; // ✅ Make sure this path is correct
// import { productUrl } from '../../Api/endPoints';

// const Results = () => {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [categoryName]);



//   return (
//     <LayOut>
//       <section>
//         <h1 style={{ padding: '30px' }}>Results</h1>
//         <p style={{ padding: '30px' }}>Category: {categoryName}</p>
//         <hr />
//         <div className={classes.products__container}>

//           {results?.length > 0 ? (
//             results.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p style={{ padding: '30px' }}>No products found for this category.</p>
//           )}
//         </div>
//       </section>
//     </LayOut>
//   );
// };

// export default Results;


import React, { useEffect, useState } from 'react';
import classes from './Results.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader';
import { productUrl } from '../../Api/endPoints';

const Results = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: '30px' }}>Results</h1>
        <p style={{ padding: '30px' }}>
          Category: <strong>{categoryName}</strong>
        </p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : results?.length > 0 ? (
          <div className={classes.products__container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p style={{ padding: '30px' }}>
            No products found for this category.
          </p>
        )}
      </section>
    </LayOut>
  );
};

export default Results;
