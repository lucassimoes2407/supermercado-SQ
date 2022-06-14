const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();


router.get('/', produtoController.getAllProdutos);
router.get('/:cod_produto', produtoController.getProdutoByCodProduto);

module.exports = router;
