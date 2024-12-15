const express = require('express');
const { getAllBrands, addBrand } = require('../controllers/brandController');
const router = express.Router();

router.get('/brands', getAllBrands);
router.post('/brands', addBrand);
router.delete('/brands/:id', deleteBrand); 
router.put('/editbrand/:id', editBrand); 

module.exports = router;
