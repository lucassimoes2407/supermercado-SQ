const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './src/public/images' })

// Gets
router.get('/', productController.getAllProducts);
router.get('/:productCode',productController.getProductByProductCode);

// Posts
router.post('/', upload.array('product-images', 6), productController.postProduct);

// Puts
router.put('/', productController.putProduct);

// Deletes
router.delete('/:productCode', productController.deleteProductByProductCode);

module.exports = router;
