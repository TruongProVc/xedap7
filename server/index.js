const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; 

const authenticateJWT = require("./src/Common/Authentication");
// Controller imports
const { getAllBrands, addBrand, deleteBrand, editBrand } = require("./src/app/controller/BrandController");
const { getAllProducts, addProduct, deleteProduct, getProductDetails, getProductSpecifications, searchProducts } = require("./src/app/controller/ProductController");
const { getAllAccounts, getProfileAdmin,updateProfileAdmin,changePassword } = require("./src/app/controller/AccountController");
const { login,register } = require("./src/app/controller/LoginController");


app.use(cors({ origin: "http://localhost:3001", credentials: true })); 
app.use(express.json()); 
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'src', 'app', 'uploads')));

// Route đăng nhập (không cần xác thực)
app.post("/privatesite/login", login);
app.post("/register", register);

app.get('/privatesite/profile',authenticateJWT, getProfileAdmin);
app.put('/privatesite/updateprofile',authenticateJWT, updateProfileAdmin);
app.put('/privatesite/profile/changepassword', authenticateJWT, changePassword); // Route thay đổ

app.get("/privatesite/accountmanagement", authenticateJWT, getAllAccounts);
// route
app.get('/productdetail  s/:id', getProductDetails);
app.get('/search', searchProducts);
// Sản phẩm
app.get("/privatesite/products", authenticateJWT,getAllProducts);
app.post("/privatesite/addproduct", authenticateJWT, addProduct);
app.delete("/privatesite/products/:id", authenticateJWT, deleteProduct);
// Thương hiệu
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


