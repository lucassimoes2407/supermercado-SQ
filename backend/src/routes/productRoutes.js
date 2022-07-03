const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './src/public/images' })
const authMiddlewares = require('../middlewares/authorization');

// Gets
router.get('/', productController.getAllProducts);
router.get('/:productCode',productController.getProductByProductCode);

// Posts
router.post('/', upload.array('product-images', 6), authMiddlewares.verifyJWT, productController.postProduct);

// Puts
router.put('/', authMiddlewares.verifyJWT, productController.putProduct);

// Deletes
router.delete('/:productCode', authMiddlewares.verifyJWT, productController.deleteProductByProductCode);

module.exports = router;
