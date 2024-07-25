import React from 'react';
import ProductDetails from './componentes/ProductDetails/ProductDetails';
import PaymentPage from './componentes/PaymentPage/PaymentPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productDetails/:titulo' element={<ProductDetails/>}></Route>
        <Route path='/paymentPage' element={<PaymentPage/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;