import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login";
import SignUp from '../Pages/SignUp';
import Products from "../Pages/Products";
import Contacts from '../Pages/Contacts';
import PrivateRoute from "../Routes/PrivateRoute";
import Home from "../Pages/Home";
import ShoppingCart from "../Pages/ShoppingCart";
import PaymentPage from '../Pages/PaymnentPage';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route
        path="/Products"
        element={<PrivateRoute><Products /></PrivateRoute>}
      />
      <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
      <Route path="/PaymentPage" element= {<PaymentPage/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
