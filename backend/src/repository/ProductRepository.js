const { databaseQuery } = require("../config/db");

// GETS
let getAllProducts = async () => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto`);
    } catch (error) {
        throw error;
    }
};

let getByProductCode = async (productCode) => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto 
            WHERE cod_produto = ${productCode}`);
    } catch (error) {
        throw error;
    }
};

let getByProductName = async (productName) => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto
            WHERE nome LIKE '%${productName}%'`);
    } catch (error) {
        throw error;
    }
}

let getByIngredient = async (productIngredient) => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto
            WHERE ingredientes LIKE '%${productIngredient}%'`);
    } catch (error) {
        throw error;
    }
};

let getByBrand = async (productBrand) => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto
            WHERE marca LIKE '%${productBrand}%'`);
    } catch (error) {
        throw error;
    }
};

let getByUser = async (productUser) => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto
            WHERE cod_usuario = ${productUser}`);
    } catch (error) {
        throw error;
    }
};


// CREATES
let createProduct = async ({ nome, marca = null, ingredientes, img_produto = null, cod_usuario }) => {
    try {
        return await databaseQuery(
            `INSERT INTO produto 
            VALUES(
               '${nome}', 
               '${marca}', 
               '${ingredientes}', 
               '${img_produto}',
               ${cod_usuario} )`
        );
    }
    catch (error) {
        throw error;
    }
};


// UPDATES
let updateProduct = async ({ cod_produto, nome, marca, ingredientes, img_produto, cod_usuario }) => {
    try {
        return await databaseQuery(`
            UPDATE produto 
            SET
                nome = '${nome}', 
                marca = '${marca}', 
                ingredientes = '${ingredientes}', 
                img_produto = '${img_produto}', 
                cod_usuario = ${cod_usuario}
            WHERE cod_produto = ${cod_produto}`);
    } catch (error) {
        throw error;
    }
};


// DELETES
const deleteProductByCodProduct = async (codProduct) => {
    try {
        return await databaseQuery(`
            DELETE FROM produto 
            WHERE cod_produto = '${codProduct}'`);
    } catch (error) {
        throw error;
    }
}



module.exports = {
    getAllProducts,
    getByProductCode,
    getByProductName,
    getByIngredient,
    getByBrand,
    getByUser,
    createProduct,
    updateProduct,
    deleteProductByCodProduct
};
