const { databaseQuery } = require("../config/db");

let postRestriction = async (nome_restricao = null) => {
    try {
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

let getRestrictionByCod = async (cod_restricao = null) => {
    try {
        let restrictionByCod = await databaseQuery(`SELECT nome_restricao FROM restricao WHERE cod_restricao='${cod_restricao}'`);

        return {restrictions: restrictionByCod.rows, status: 200}
    }catch(e){
        throw e;
    }
}

let getCodRestrictionByName = async (nome_restricao = null) => {
    try {

        nome_restricao = nome_restricao.toUpperCase();

        let codRestrictionByName = await databaseQuery(`SELECT cod_restricao FROM restricao WHERE nome_restricao='${nome_restricao}'`);

        return {restrictions: codRestrictionByName.rows, status: 200}
    }catch(e){
        throw e;
    }
}

let deleteRestriction = async (cod_restricao = null) => {
    try {
        await databaseQuery(`DELETE FROM restricao WHERE cod_restricao=${cod_restricao}`);

        return {message: `Restrição ${cod_restricao} deletada`, status: 200}
    }catch(e){
        throw e;
    }
}

let putRestriction = async (cod_restricao, nome_restricao) => {
    try {        
        nome_restricao = nome_restricao.toUpperCase()

        await databaseQuery(`UPDATE restricao SET nome_restricao = '${nome_restricao}' WHERE cod_restricao = ${cod_restricao}`);
        
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