const express = require('express');
const productRestrictionController = require('../controllers/productRestrictionController');
const authMiddlewares = require('../middlewares/authorization');
const productRestrictionRouter = express.Router();

// GETs
productRestrictionRouter.get('/:cod_produto', productRestrictionController.getProductRestriction);

// POSTs
productRestrictionRouter.post('/:cod_produto', authMiddlewares.verifyJWT, productRestrictionController.postProductRestriction);

// DELETEs
productRestrictionRouter.delete('/:cod_produto', authMiddlewares.verifyJWT, productRestrictionController.deleteProductRestriction);

module.exports = productRestrictionRouter;