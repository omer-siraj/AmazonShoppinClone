import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/Auth/SignUp';
import Payments from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';

const Routing = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="/auth" element={<SignUp />} />
      <Route path='/payments' element={<Payments />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/category/:categoryName' element={<Results />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </Router>
);

export default Routing;
