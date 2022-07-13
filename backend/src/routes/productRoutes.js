const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './src/public/images' })
const authMiddlewares = require('../middlewares/authorization');

// Gets
router.get('/', productController.getAllProducts);
router.get('/:productCode', productController.getProductByProductCode);
router.get('/name/:productName', productController.getProductByProductName);
router.get('/ingredient/:productIngredient', productController.getProductByIngredient);
router.get('/brand/:productBrand', productController.getProductByBrand);
router.get('/user/:productUser', productController.getProductByUser);

// Posts
router.post('/', upload.array('product-images', 6), productController.postProduct);

// Puts
router.put('/', productController.putProduct);

// Deletes
router.delete('/:productCode', productController.deleteProductByProductCode);

module.exports = router;
