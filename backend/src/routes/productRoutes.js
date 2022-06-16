const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Gets
router.get('/', productController.getAllProducts);
router.get('/:productCode', productController.getProductByProductCode);

// Posts
router.post('/', productController.postProduto);

// Puts
router.put('/', productController.putProduto);

// Deletes
router.delete('/:productCode', productController.deleteProductByProductCode);

module.exports = router;
