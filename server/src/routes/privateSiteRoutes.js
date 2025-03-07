const express = require("express");
const { getAllAccounts, 
    getProfileAdmin, 
    updateProfileAdmin, 
    changePassword } = require("../app/controller/AccountController");
const { getAllProducts, 
    addProduct, 
    deleteProduct, 
    updateProduct,
    getProductById } = require("../app/controller/ProductController");
const { getAllBrands, 
    addBrand, 
    deleteBrand, 
    editBrand } = require("../app/controller/BrandController");
const {getAllOrder,
    deleteOrder,
    getOrderById,
    changeStatusOrder
} = require("../app/controller/OrderController")
const { 
    getRevenue
} = require("../app/controller/RevenueController");

const authorize = require("../Common/Authorize");
const router = express.Router();

// Thông tin
router.get("/accountmanagement", authorize(["Quản trị"]), getAllAccounts);
router.get("/profile", authorize(["Quản trị"]), getProfileAdmin);
router.put("/updateprofile", authorize(["Quản trị"]), updateProfileAdmin);
router.put("/profile/changepassword", authorize(["Quản trị"]), changePassword);

// Sản phẩm
router.get("/products",authorize(["Quản trị"]),getAllProducts);
router.post("/addproduct",authorize(["Quản trị"]), addProduct);
router.get("/productById/:id",authorize(["Quản trị"]), getProductById);
router.put("/addproduct/:id", authorize(["Quản trị"]), updateProduct);
router.delete("/products/:id", authorize(["Quản trị"]), deleteProduct);

// Thương hiệu
router.get("/brands", getAllBrands);
router.post("/brands", authorize(["Quản trị"]), addBrand);
router.delete("/brands/:id", authorize(["Quản trị"]), deleteBrand);
router.put("/editbrand/:id", authorize(["Quản trị"]), editBrand);

// Đơn hàng
router.get("/orders", getAllOrder);
router.put("/orders/changestatus/:id", changeStatusOrder);
router.get("/orders/:id", getOrderById);
router.delete("/orders/delete/:id", deleteOrder);

// Doanh thu
router.get("/revenue", getRevenue);

 // Route thay đổ
module.exports = router;
