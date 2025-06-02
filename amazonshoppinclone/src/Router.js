import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Auth/SignUp';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<SignIn />} />
      <Route path="/payments" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
