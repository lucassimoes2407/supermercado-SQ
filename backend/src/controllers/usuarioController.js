const usuarioModel = require('../models/usuarioModel');

const getAllUsers = async (req, res, next) => {
    try {
        let product = await productModel.getAllUsers();
        res.status(200).json( product.rows );
    } catch (error) {
        res.status(400).json( error.message );
    }
};

const getUserByUserCode = async (req, res, next) => {
    try {
        let product = await produtoModel.getByUserCod( req.params.productCode );
        res.status(200).json( product.rows )
    } catch (error) {
        res.status(400).json( error.message );
    }
};

module.exports = {
    getAllUsers,
    getUserByUserCode
};