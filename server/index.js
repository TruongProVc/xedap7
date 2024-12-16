const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

//controller
const { getAllBrands, addBrand, deleteBrand,editBrand } = require('./src/app/controller/BrandController');
const { getAllProducts, addProduct, deleteProduct } = require('./src/app/controller/ProductController');
const { getAllAccounts } = require('./src/app/controller/AccountController');

const bodyParser = require('body-parser');



// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());




app.get('/products', getAllProducts);
app.post('/addproduct', addProduct);
app.delete('/products/:id', deleteProduct);

app.get('/accountmanagement',getAllAccounts)

app.get('/brands', getAllBrands);
app.post('/brands', addBrand);
app.delete('/brands/:id', deleteBrand); 
app.put('/editbrand/:id', editBrand); 



app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});