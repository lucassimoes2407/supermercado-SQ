const { databaseQuery } = require("../config/db");

// TESTADO E APROVADO
let getAllProdutos = async () => {
    try {
        return await databaseQuery("SELECT * FROM produto");
    } catch (error) {
        throw error;
    }
};

let getByCodProduto = async ( cod_produto ) => {
    try {
        return await databaseQuery(`SELECT * FROM produto WHERE cod_produto = ${cod_produto}`);
    } catch (error) {
        throw error;
    }
};


// EM DESENVOLVIMENTO
let getByNomeMarcaAndIngredientes = async (nome, marca, ingredientes) => {
    try {
        return await databaseQuery(`SELECT * FROM produto WHERE nome = ${nome} AND ingredientes = ${ingredientes} AND marca = ${marca}`);
    } catch (error) {
        throw error;        
    }    
};

let createProduto = async ( nome, marca, ingredientes, img_produto, img_tabela_nutricional, cod_usuario ) => {
    try {
        return await databaseQuery(
           `INSERT INTO produto 
            SET nome = ${nome}, 
                marca = ${marca}, 
                ingredientes = ${ingredientes}, 
                 ${img_produto}, ${img_tabela_nutricional}, ${cod_usuario})`);
    } 
    catch (error) {
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
    getAllProdutos,
    getByCodProduto
};