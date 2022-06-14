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

module.exports = {
    getAllProducts,
    getProductByProductCode
};

