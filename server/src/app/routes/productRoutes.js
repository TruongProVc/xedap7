const express = require('express');
const { getAllProducts, addProduct } = require('../controllers/productController');
const router = express.Router();

app.get('/products', getAllProducts);
app.get('/addproduct', addProduct);
app.delete('/deleteproduct', deleteProduct);


module.exports = router;
