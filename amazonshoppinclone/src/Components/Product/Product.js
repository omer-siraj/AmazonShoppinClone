// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from './ProductCard';
// import classes from './Product.module.css'; // <- make sure this path and name match your file
// import { listItemSecondaryActionClasses } from '@mui/material';
// import Loader from '../Loader/Loader';

// const Product = () => {
//   const [products, setProducts] = useState([]);

//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setProducts(res.data);
//         isLoading(false)
//       })
//       .catch((err) => {
//         console.log(err);
//         isLoading(false)
//       });
//   }, []);

//   return (
//     <>
//     {
//       isLoading?(<Loader/>) : (      <section className={classes.products__container}>
//         {products.map((singleProduct) => (
//           <ProductCard product={singleProduct} key={singleProduct.id} />
//         ))}
//       </section>)
//     }


    
//     </>


//   );
// };

// export default Product;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';

const Product = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true); // Start as true

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false); // ✅ FIXED
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // ✅ FIXED
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {products.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Product;




























