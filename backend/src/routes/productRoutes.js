const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Gets
router.get('/', productController.getAllProducts);
router.get('/:productCode', productController.getProductByProductCode);

// Posts
router.post('/', productController.postProduct);

// Puts
router.put('/', productController.putProduct);

// Deletes
router.delete('/:productCode', productController.deleteProductByProductCode);

module.exports = router;
