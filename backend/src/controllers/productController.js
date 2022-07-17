const productModel = require('../repository/ProductRepository');


// GETS
const getAllProducts = async (req, res, next) => {
    try {
        let response = await productModel.getAllProducts();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(400).json(error.message);
    }
};

const getProductByProductCode = async (req, res, next) => {
    try {
        let product = await productModel
            .getByProductCode(req.params.productCode);
        res.status(200).json(product)
    } catch (error) {
        console.error(error.message);
        res.status(400).json(error.message);
    }
};

const getProductByProductName = async (req, res, next) => {
    try {
        let productList = await productModel
            .getByProductName(req.params.productName);
        res.status(200).json(productList);
    } catch (error) {
        console.error(error.message);
        res.status(400).json(error.message);
    }
};

const getProductByIngredient = async (req, res, next) => {
    try {
        let productList = await productModel
            .getByIngredient(req.params.productIngredient);
        res.status(200).json(productList);
    } catch (error) {
        res.send(400).json(error.message);
    }
};

const getProductByBrand = async (req, res, next) => {
    try {
        let productList = await productModel
            .getByBrand(req.params.productBrand);
        res.status(200).json(productList);
    } catch (error) {
        res.send(400).json(error.message);
    }
};

const getProductByUser = async (req, res, next) => {
    try {
        let productList = await productModel
            .getByUser(req.params.productUser);
        res.status(200).json(productList);
    } catch (error) {
        res.send(400).json(error.message);
    }
};

// CREATE
const postProduct = async (req, res, next) => {
    try {
        if (req.body.nome == null || req.body.nome.trim() === "")
            return res.status(400).json("Nome do produto é inválido!");
        else if (req.body.ingredientes == null || req.body.ingredientes.trim() === "")
            return res.status(400).json("Ingredientes do produto inválido!");
        else if (req.body.cod_usuario == null || req.body.cod_usuario < 0)
            return res.status(400).json("Usuario inválido!");

        if (req.files && req.files.length > 0) {
            for (let i = 0; i < req.files.length; i++)
                req.body.img_produto += req.files[i].filename + ",";

            req.body.img_produto = req.body.img_produto.slice(0, -1);
        }

        await productModel.createProduct(req.body);

        return res.status(200).send("Produto criado com sucesso!");
    } catch (error) {
        console.error(error.message);
        res.status(400).json(error.message);        
    }
};


// UPDATE
const putProduct = async (req, res, next) => {
    try {
        const product = await productModel.getByProductCode(req.body.cod_produto);
        
        if (product.productInfo == undefined)
            return res.status(400).json("Produto não existe!");

        await productModel.updateProduct(req.body);
        return res.status(200).send("Produto atualizado com sucesso!");
    } catch (error) {
        console.error(error.message);
        res.status(400).json(error.message);
    }
};


// DELETE
const deleteProductByProductCode = async (req, res, next) => {
    try {
        const product = await productModel.getByProductCode(req.params.productCode);
        if (product.productInfo == undefined)
            return res.status(400).json("Produto não existe!");

        await productModel.deleteProductByCodProduct(req.params.productCode);
        res.status(200).json("Produto deletado com sucesso!");
    } catch (error) {
        console.error(error.message);
        res.status(400).json(error.message);
    }
}


module.exports = {
    getAllProducts,
    getProductByProductCode,
    getProductByProductName,
    getProductByIngredient,
    getProductByBrand,
    getProductByUser,
    postProduct,
    putProduct,
    deleteProductByProductCode
};

