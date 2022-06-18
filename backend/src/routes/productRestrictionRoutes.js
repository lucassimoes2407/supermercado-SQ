const express = require('express');
const productRestrictionController = require('../controllers/productRestrictionController');

const productRestrictionRouter = express.Router();

productRestrictionRouter.get('/:cod_produto', productRestrictionController.getProductRestriction);
productRestrictionRouter.post('/:cod_produto', productRestrictionController.postProductRestriction);
productRestrictionRouter.delete('/:cod_produto', productRestrictionController.deleteProductRestriction);

module.exports = productRestrictionRouter;