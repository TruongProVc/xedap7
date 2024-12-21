import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./Page/Login/Login";
import Register from "./Page/Login/Register"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* User Layout */}
      <Route path="/*" element={<UserLayout />} />
      {/* Admin Layout */}
      <Route path="/privatesite/*" element={<AdminLayout />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
