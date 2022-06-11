const { databaseQuery } = require("../config/db");

let postRestriction = async (nome_restricao = null) => {
    try {
        if(!nome_restricao) throw {
            message: "Nome para restrição não fornecido",
            status: 400
        };
        
        let restrictionExists = await databaseQuery(`SELECT cod_restricao FROM restricao WHERE nome_restricao='${nome_restricao}'`);
        if(!!restrictionExists.rows.length) throw {
            message: "Restrição já existe", 
            status: 400
        };

        await databaseQuery(`INSERT INTO restricao VALUES ('${nome_restricao}')`);

        return {message: `Restrição '${nome_restricao}' criada`, status: 201}
    }catch(e){
        throw e;
    }
}

let getAllRestriction = async () => {
    try {
        let restrictionList = await databaseQuery(`SELECT * FROM restricao`);

        return {restrictions: restrictionList.rows, status: 200}
    }catch(e){
        throw e;
    }
}

let deleteRestriction = async (cod_restricao) => {
    try {
        if(!cod_restricao) throw { 
            message: "Código de restrição inválido", 
            status: 400
        }

        let deleteResponse = await databaseQuery(`DELETE FROM restricao WHERE cod_restricao=${cod_restricao}`);
        if(deleteResponse.rowCount < 1) throw {
            message: "Restrição não encontrada",
            status: 400
        }

        return {message: `Restrição ${cod_restricao} deletada`, status: 200}
    }catch(e){
        throw e;
    }
}

module.exports = {
    postRestriction,
    getAllRestriction,
    deleteRestriction
}