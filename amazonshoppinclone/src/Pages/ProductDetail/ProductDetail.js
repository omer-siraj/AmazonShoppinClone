
// import React, { useEffect, useState } from 'react'; // ✅ Missing useState import
// import classes from './ProductDetail.module.css';
// import LayOut from '../../Components/LayOut/LayOut';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { productUrl } from '../../Api/endPoints';
// import ProductCard from '../../Components/Product/ProductCard';
// import Loader from '../../Components/Loader/Loader';


// const ProductDetail = () => {
//   const { productId } = useParams(); // ✅ useParams should be called as a function
//   const [isLoading, setIsLoading] = useState(true);
//   const [product, setProduct] = useState({}); // ✅ Correct useState syntax



//   useEffect(() => {
//     setIsLoading(true)
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false)
//       });
//   }, [productId]); // ✅ productId should be a dependency

//   return (
//     <LayOut>
//       {isLoading? (<Loader/>):( <ProductCard product={product} />)}
     
//     </LayOut> 
//   );
// };

// export default ProductDetail;


import React, { useEffect, useState } from 'react';
import classes from './ProductDetail.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader'; 

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // ✅ STATE DEFINED

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false); // ✅ CORRECTED
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); // ✅ CORRECTED
      });
  }, [productId]);


  return (
    <LayOut>
      {isLoading ? (
        <Loader /> 
      ) : (
        <ProductCard product={product} />
      )}
    </LayOut>
  );
};

export default ProductDetail;
