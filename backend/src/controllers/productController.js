const productModel = require('../models/ProductModel');

const getAllProducts = async (req, res, next) => {
    try {
        let product = await productModel.getAllProducts();
        res.status(200).json( product.rows );
    } catch (error) {
        res.status(400).json( error.message );
    }
};

const getProductByProductCode = async (req, res, next) => {
    try {
        let product = await produtoModel.getByCodProduto( req.params.productCode );
        res.status(200).json( product.rows )
    } catch (error) {
        res.status(400).json( error.message );
    }
};

const postProduto = async (req, res, next) => {
    try {
        let { nome, marca = null, ingredientes, img_produto = null, img_tabela_nutricional = null, cod_usuario } = req.body;
        console.log("Ok");
        if ( nome == null || nome == "" )
            res.send(400).send( "Nome do produto é inválido!" );
        else if ( ingredientes == null || ingredientes == "" )
            res.send(400).json( "Ingredientes do produto inválido!" );
        else if ( cod_usuario == null )
            res.send(400).json( "Usuario inválido!" );
            console.log("Ok");

        await productModel.createProduto( nome, marca, ingredientes, img_produto, img_tabela_nutricional, cod_usuario );
        res.code(200).send("OK");
    } catch (error) {
        
    }
};

module.exports = {
    getAllProducts,
    getProductByProductCode,
    postProduto
};

