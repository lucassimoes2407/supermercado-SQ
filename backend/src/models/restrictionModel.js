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

        await databaseQuery(`INSERT INTO restricao VALUES ('${nome_restricao.toUpperCase()}')`);

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

let getRestrictionByCod = async (cod_restricao = null) => {
    try {
        if(!cod_restricao) throw {
            message: "Código de restrição não fornecido",
            status: 400
        }
        let restrictionByCod = await databaseQuery(`SELECT nome_restricao FROM restricao WHERE cod_restricao=${cod_restricao}`);
        if(restrictionByCod.rows[0]){
            return {restrictions: restrictionByCod.rows, status: 200}
        }else{
            throw {message: "cod_restricao inválido", status: 400}
        }
    }catch(e){
        throw e;
    }
}

let getCodRestrictionByName = async (nome_restricao = null) => {
    try {
        if((!nome_restricao) || (!isNaN(nome_restricao))) throw {
            message: "Nome da restrição inválido",
            status: 400
        }
        nome_restricao = nome_restricao.toUpperCase();

        let codRestrictionByName = await databaseQuery(`SELECT cod_restricao FROM restricao WHERE nome_restricao='${nome_restricao}'`);

        if(codRestrictionByName.rowCount < 1) throw{
            message: "Nome da restrição não cadastrado",
            status: 400
        }

        return {restrictions: codRestrictionByName.rows, status: 200}
    }catch(e){
        throw e;
    }
}

let deleteRestriction = async (cod_restricao = null) => {
    try {
        if(!cod_restricao) throw { 
            message: "Código de restrição não fornecido", 
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

let putRestriction = async (cod_restricao, nome_restricao) => {
    try {
        if(!cod_restricao) throw {
            message: "Código de restrição não fornecido",
            status: 400
        }
        
        nome_restricao = nome_restricao.toUpperCase()



        let response = await databaseQuery(`UPDATE restricao SET nome_restricao = '${nome_restricao}' WHERE cod_restricao = ${cod_restricao}`);
        
        // return {response, status: 200};
        return {message: `Restrição cod: ${cod_restricao} alterada para ${nome_restricao}`, status: 200};

    }catch(e){
        throw e;
    }
}

module.exports = {
    postRestriction,
    getAllRestriction,
    getRestrictionByCod,
    getCodRestrictionByName,
    deleteRestriction,
    putRestriction
}