const produtoModel = require('../models/ProdutoModel');

const getAllProdutos = async (req, res, next) => {
    try {
        let produtos = await produtoModel.getAllProdutos();
        res.status(200).json( produtos.rows );
    } catch (error) {
        res.status(400).json( error.message );
    }
};

const getProdutoByCodProduto = async (req, res, next) => {
    try {
        let produto = await produtoModel.getByCodProduto( req.params.cod_produto );
        res.status(200).json( produto.rows )
    } catch (error) {
        res.status(400).json( error.message );
    }
};

module.exports = {
    getAllProdutos,
    getProdutoByCodProduto
};

