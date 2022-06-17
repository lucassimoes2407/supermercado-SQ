const productModel = require('../models/ProductModel');


// GETS
const getAllProducts = async (req, res, next) => {
    try {
        let product = await productModel.getAllProducts();
        res.status(200).json( product.rows );
    } catch (error) {
        console.error(error.message);
    }
};

const getProductByProductCode = async (req, res, next) => {
    try {
        let product = await productModel
            .getByProductCode( req.params.productCode );
        res.status(200).json( product.rows )
    } catch (error) {
        console.error(error.message);
    }
};


// CREATE
const postProduct = async (req, res, next) => {
    try {
        if ( req.body.nome == null || req.body.nome.trim() === "" )
            return res.status(400).json( "Nome do produto é inválido!" );
        else if ( req.body.ingredientes == null || req.body.ingredientes.trim() === "" )
            return res.status(400).json( "Ingredientes do produto inválido!" );
        else if ( req.body.cod_usuario == null || req.body.cod_usuario < 0 )
            return  res.status(400).json( "Usuario inválido!" );
        
        await productModel.createProduct( req.body );

        return res.status(200).send("Produto criado com sucesso!");
    } catch (error) {
        console.error(error.message);        
    }
};


// UPDATE
const putProduct = async ( req, res, next ) => {
    try {
        const productExists = await getProductByProductCode(req.params.cod_usuario);
        if(!productExists) 
            return res.status(400).send("Produto não existe!");
       
        await productModel.updateProduct( req.body );
        return res.status(200).send("Produto atualizado com sucesso!");
    } catch (error) {
        console.error(error.message);
    }
};


// DELETE
const deleteProductByProductCode = async (req, res, next) => {
    try{
        const productExists = await getProductByProductCode(req.params.cod_usuario);
        if(!productExists) 
            return res.status(400).send("Produto não existe!");
            
        await productModel.deleteProductByCodProduct(req.params.productCode);
        res.status(200).json("Produto deletado com sucesso!");
    }catch(error){
        res.status(400).json(error.message);
    }
}


module.exports = {
    getAllProducts,
    getProductByProductCode,
    postProduct,
    putProduct,
    deleteProductByProductCode
};

