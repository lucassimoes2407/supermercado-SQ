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

let getByProductCode = async ( productCode ) => {
    try {
        return await databaseQuery(`
            SELECT * FROM produto 
            WHERE cod_produto = ${productCode}`);
    } catch (error) {
        throw error;
    }
};


// CREATES
let createProduct = async ( { nome, marca = null, ingredientes, img_produto = null, img_tabela_nutricional = null, cod_usuario } ) => {
    try {
        return await databaseQuery(
           `INSERT INTO produto 
            VALUES(
               '${nome}', 
               '${marca}', 
               '${ingredientes}', 
               '${img_produto}',
               '${img_tabela_nutricional}',
               ${cod_usuario} )`
            );
    } 
    catch (error) {
        throw error;
    }
};


// UPDATES
let updateProduct = async ( { cod_produto, nome, marca, ingredientes, img_produto, img_tabela_nutricional, cod_usuario } ) => {
    try {
        return await databaseQuery(`
            UPDATE produto 
            SET
                nome = '${nome}', 
                marca = '${marca}', 
                ingredientes = '${ingredientes}', 
                img_produto = '${img_produto}', 
                img_tabela_nutricional = '${img_tabela_nutricional}', 
                cod_usuario = ${cod_usuario}
            WHERE cod_produto = ${cod_produto}`);
    } catch (error) {
        throw error;
    }
};


// DELETES
const deleteProductByCodProduct = async (codProduct) => {
    try{
        return await databaseQuery(`
            DELETE FROM produto 
            WHERE cod_produto = '${codProduct}'`);
    }catch(error){
        throw error;
    }
}



module.exports = {
    getAllProducts,
    getByProductCode,
    createProduct,
    updateProduct,
    deleteProductByCodProduct
};
