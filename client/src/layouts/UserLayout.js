import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import HomePage from "../Page/User/HomePage";
import ProductDetail from "../Page/User/ProductDetail";
import AllProducts from "../Page/User/AllProducts";
import AboutUs from "../Page/User/AboutUs";

const UserLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/productdetails/:id" element={<ProductDetail />} />
          <Route path="/AllItem" element={<AllProducts />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
