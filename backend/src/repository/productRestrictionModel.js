const { databaseQuery } = require('../config/db');
const { getRestrictionByCod } = require('./restrictionModel')

const getProductRestriction = async (cod_produto = null)=>{
    try{ 
        let restrictionList = await databaseQuery(`SELECT cod_restricao FROM produto_restricao WHERE cod_produto=${cod_produto}`);
        
        if(restrictionList.rowCount < 1) throw {
            message: "Esse produto não tem restrições",
            status: 400
        }

        return { restrictions: restrictionList.rows, status: 200}

    }catch(e){
        throw e;
    }
}

const postProductRestriction = async (cod_produto = null, cod_restricao = null)=>{
    try{
        let restrictionExists = await databaseQuery(`SELECT cod_restricao FROM produto_restricao WHERE cod_restricao=${cod_restricao} AND cod_produto=${cod_produto}`);
    
        if(restrictionExists.rows.length > 0) throw {
            message: "Restrição já associada a este Produto",
            status: 400
        }

        await databaseQuery(`INSERT INTO produto_restricao VALUES (${cod_produto}, ${cod_restricao})`);

        let { restrictions } = await getRestrictionByCod(cod_restricao);
        let nome_restricao = restrictions[0].nome_restricao;

        return { message: `Restrição a ${nome_restricao} adicionada`, status: 200};        
    }catch(e){
        throw e;
    }
}

const deleteProductRestriction = async (cod_produto = null, cod_restricao = null)=>{
    try {
        let restrictionExists = await databaseQuery(`SELECT cod_restricao FROM produto_restricao WHERE cod_restricao=${cod_restricao} AND cod_produto=${cod_produto}`);
                
        if(restrictionExists.rowCount < 1) throw {
            message: "Restrição não associada a este Produto",
            status: 400
        }

        let { restrictions } = await getRestrictionByCod(cod_restricao);
        let nome_restricao = restrictions[0].nome_restricao;

        await databaseQuery(`DELETE FROM produto_restricao WHERE cod_restricao=${cod_restricao} AND cod_produto=${cod_produto}`);

        return {message: `Restrição a ${nome_restricao} removida`, status: 200}
        
    }catch(e){
        throw e;
    }

}

module.exports = {
    getProductRestriction,
    postProductRestriction,
    deleteProductRestriction
}