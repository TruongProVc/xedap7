



const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user; // Thông tin người dùng đã được gắn sau khi authentication
    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Bạn không có quyền truy cập tài nguyên này." });
    }
    next(); 
  };
};

// app.get("/privatesite/accountmanagement", authenticateJWT, authorizeRoles("admin"), getAllAccounts);
// app.post("/privatesite/addproduct", authenticateJWT, authorizeRoles("admin", "editor"), addProduct);
// app.get("/privatesite/profile", authenticateJWT, authorizeRoles("user", "admin"), (req, res) => {
//   const user = req.user;
//   res.json(user);
// });

