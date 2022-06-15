const { databaseQuery } = require("../config/db");

// TESTADO E APROVADO
let getAllProducts = async () => {
    try {
        return await databaseQuery("SELECT * FROM produto");
    } catch (error) {
        throw error;
    }
};

let getByProductCode = async ( productCode ) => {
    try {
        return await databaseQuery(`SELECT * FROM produto WHERE cod_produto = ${productCode}`);
    } catch (error) {
        throw error;
    }
};


// EM DESENVOLVIMENTO
let createProduto = async ( nome, marca = null, ingredientes, img_produto = null, img_tabela_nutricional = null, cod_usuario ) => {
    try {
        console.log("Ok");

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


let getByNomeMarcaAndIngredientes = async (nome, marca, ingredientes) => {
    try {
        return await databaseQuery(`SELECT * FROM produto WHERE nome = ${nome} AND ingredientes = ${ingredientes} AND marca = ${marca}`);
    } catch (error) {
        throw error;        
    }    
};


let updateProduto = async ( cod_produto, nome, marca, ingredientes, img_produto, img_tabela_nutricional, cod_usuario ) => {
    try {
        return await databaseQuery(`UPDATE produto VALUES (${nome}, ${marca}, ${ingredientes}, ${img_produto}, ${img_tabela_nutricional}, ${cod_usuario})`);
    } catch (error) {
        throw error;
    }
};

let getProdutoByCodProduto = async ( cod_produto ) => {
    try {
        return await databaseQuery(`SELECT * FROM produto WHERE cod_produto = ${cod_produto}`);      
    } catch (error) {
        throw error;
    }
};

let deleteProdutoByCodProduto = async ( cod_produto ) => {
    try {
        return await databaseQuery(`DELETE FROM produto WHERE cod_produto = ${cod_produto}`);
    } catch (error) {
        throw error;
    }
};




module.exports = {
    getAllProducts,
    getByProductCode,
    createProduto
};