import React from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import AllProducts from "../Page/User/AllProducts";
import AboutUs from "../Page/User/AboutUs";
import HomePage from "../Page/User/HomePage";
import ProductDetail from "../Page/User/ProductDetail";
import Login from "../Page/Login/Login";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  return (
    <div>
      {!isLoginPage && <Header />}
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/productdetails/:id" element={<ProductDetail />} />
          <Route path="/AllItem" element={<AllProducts />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      {!isLoginPage && <Footer />}
    </div>
  );
};
const UserLayout = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default UserLayout;
