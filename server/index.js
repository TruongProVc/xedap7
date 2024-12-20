const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const path = require("path");
// require("dotenv").config(); Để đọc biến môi trường từ tệp .env

const app = express();
const PORT = process.env.PORT || 3000; 
const SECRET_KEY ="saddasdasadsasdadsas"; // Đọc khóa bí mật từ biến môi trường

// Controller imports
const { getAllBrands, addBrand, deleteBrand, editBrand } = require("./src/app/controller/BrandController");
const { getAllProducts, addProduct, deleteProduct, getProductDetails, getProductSpecifications, searchProducts } = require("./src/app/controller/ProductController");
const { getAllAccounts, getProfileAdmin } = require("./src/app/controller/AccountController");
const { login } = require("./src/app/controller/LoginController");


app.use(cors({ origin: "http://localhost:3001", credentials: true })); 
app.use(express.json()); 
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'src', 'app', 'uploads')));

// xác thực JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; 
  if (!token) {
    return res.status(403).json({ message: "Token không được cung cấp" });
  }
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Token không hợp lệ" });
    }
    req.user = user; 
    next(); 
  });
};

// Route đăng nhập (không cần xác thực)
app.post("/privatesite/login", login);
app.get('/privatesite/profile', authenticateJWT, (req, res) => {
  const user = req.user;
  console.log(user)
  res.json(user); 
});
// route
app.get('/productdetails/:id', getProductDetails);
app.get('/search', searchProducts);
app.get("/privatesite/products", authenticateJWT,getAllProducts);
app.post("/privatesite/addproduct", authenticateJWT, addProduct);
app.delete("/privatesite/products/:id", authenticateJWT, deleteProduct);
app.get("/privatesite/accountmanagement", authenticateJWT, getAllAccounts);
app.get("/privatesite/brands", authenticateJWT, getAllBrands);
app.post("/privatesite/brands", authenticateJWT, addBrand);
app.delete("/privatesite/brands/:id", authenticateJWT, deleteBrand);
app.put("/privatesite/editbrand/:id", authenticateJWT, editBrand);

app.get("/", (req, res) => {
  res.json({ message: "Server đang chạy!" });
});
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
