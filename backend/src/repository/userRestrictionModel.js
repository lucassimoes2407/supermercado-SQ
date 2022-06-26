const { databaseQuery } = require('../config/db');
const { getRestrictionByCod } = require('./restrictionModel')

const getUserRestriction = async (cod_usuario = null)=>{
    try{
        
        
        let restrictionList = await databaseQuery(`SELECT cod_restricao FROM usuario_restricao WHERE cod_usuario=${cod_usuario}`);
        
        if(restrictionList.rowCount < 1) throw {
            message: "Esse usuario não tem restrições",
            status: 400
        }

        return { restrictions: restrictionList.rows, status: 200}

    }catch(e){
        throw e;
    }
}

const postUserRestriction = async (cod_usuario = null, cod_restricao = null)=>{
    try{
        let restrictionExists = await databaseQuery(`SELECT cod_restricao FROM usuario_restricao WHERE cod_restricao=${cod_restricao} AND cod_usuario=${cod_usuario}`);
    
        if(restrictionExists.rows.length > 0) throw {
            message: "Restrição já associada a este Usuario",
            status: 400
        }

        await databaseQuery(`INSERT INTO usuario_restricao VALUES (${cod_usuario}, ${cod_restricao})`);

        let { restrictions } = await getRestrictionByCod(cod_restricao);
        let nome_restricao = restrictions[0].nome_restricao;

        return { message: `Restrição a ${nome_restricao} adicionada`, status: 200};        
    }catch(e){
        throw e;
    }
}

const deleteUserRestriction = async (cod_usuario = null, cod_restricao = null)=>{
    try {
       
        let restrictionExists = await databaseQuery(`SELECT cod_restricao FROM usuario_restricao WHERE cod_restricao=${cod_restricao} AND cod_usuario=${cod_usuario}`);
                
        if(restrictionExists.rowCount < 1) throw {
            message: "Restrição não associada a este Usuario",
            status: 400
        }

        let { restrictions } = await getRestrictionByCod(cod_restricao);
        let nome_restricao = restrictions[0].nome_restricao;

        await databaseQuery(`DELETE FROM usuario_restricao WHERE cod_restricao=${cod_restricao} AND cod_usuario=${cod_usuario}`);

        return {message: `Restrição a ${nome_restricao} removida`, status: 200}
        
    }catch(e){
        throw e;
    }

}

module.exports = {
    getUserRestriction,
    postUserRestriction,
    deleteUserRestriction
}