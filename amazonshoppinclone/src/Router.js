import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Auth/SignUp';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results'; 
import ProductDetail from './Pages/ProductDetail/ProductDetail'


const Routing = () => {
  return (
    <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Results/>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />

    </Routes>

  );
};

export default Routing;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LayOut from './Components/LayOut/LayOut';
// import Landing from './Components/Pages/Landing/Landing';
// import Results from './Components/Pages/Results/Results';
// import ProductsDetail from './Components/Pages/ProductsDetail/ProductsDetail';
// import Cart from './Components/Pages/Cart/Cart';
// import Orders from './Components/Pages/Orders/Orders';
// import Payments from './Components/Pages/Payments/Payments';
// import Signup from './Components/Pages/Auth/Signup';

// const Routing = () => {
//   return (
//     <Routes>
//       <Route element={<LayOut />}>
//         <Route path="/" element={<Landing />} />
//         <Route path="/category/:categoryName" element={<Results />} />
//         <Route path="/product/:productId" element={<ProductsDetail />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/payments" element={<Payments />} />
//         <Route path="/signup" element={<Signup />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Routing;
