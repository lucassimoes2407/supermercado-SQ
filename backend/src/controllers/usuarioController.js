const usuarioModel = require('../models/usuarioModel');

const getAllUsuarios = async (req, res, next) => {
    try {
        let product = await productModel.getAllUsuarios();
        res.status(200).json( product.rows );
    } catch (error) {
        res.status(400).json( error.message );
    }
};

const getUsuarioByUsuarioCode = async (req, res, next) => {
    try {
        let product = await produtoModel.getByCodUsuario( req.params.productCode );
        res.status(200).json( product.rows )
    } catch (error) {
        res.status(400).json( error.message );
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioByUsuarioCode
};