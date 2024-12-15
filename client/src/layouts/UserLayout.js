import React, { useState } from "react";
import Header from "../Component/Header/Header";
import HomePage from "../Page/User/HomePage";
import Footer from "../Component/Footer/Footer";
import Slidebar from "../Component/Slidebar/Sidebar";

const UserLayout = () => {
  return (
    <div>
        <Header />
        <Slidebar />
        <HomePage />
        <Footer />
    </div>

  );
};

export default UserLayout;
