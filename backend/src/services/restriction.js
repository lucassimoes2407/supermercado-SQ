const { databaseQuery } = require("../config/db");

let postRestriction = async (nome_restricao = null) => {
    try {
        if(!nome_restricao) throw {message: "Nome para restrição não fornecido", status: 400};
        
        let restrictionExists = await databaseQuery(`SELECT cod_restricao FROM restricao WHERE nome_restricao='${nome_restricao}'`);
        if(!!restrictionExists.rows.length) throw {message: "Restrição já existe", status: 400};

        let response = await databaseQuery(`INSERT INTO restricao VALUES ('${nome_restricao}')`);

        return {message: "Restrição criada", status: 201}

    }catch(e){
        return e;
    }
}

let getAllRestriction = async () => {
    try {
        let restrictionList = await databaseQuery(`SELECT * FROM restricao`);
        if(!restrictionList?.rows?.length) throw {message: restrictionList, status: 400};

        return {restrictions: restrictionList.rows, status: 200}

    }catch(e){
        return e;
    }
}

module.exports = {
    postRestriction,
    getAllRestriction
}