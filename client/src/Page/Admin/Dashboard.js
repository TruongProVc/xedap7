import React, { useState, useEffect } from 'react';


const Dashboard = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = '/auth/login';
    throw new Error("Token không tồn tại. Hãy đăng nhập lại.");
  }

  return (
    <div>
      <h1>Tiểu luận NodeJs và ReactJs</h1>
    </div>
   
  );
};
export default Dashboard;
