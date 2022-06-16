const { databaseQuery } = require("../config/db");

let getAllUsers = async () => {
    try {
        return await databaseQuery('SELECT * FROM usuario');
    } catch (error) {
        throw error;
    }
};

let getUserByUserId = async (UserId) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE cod_usuario = '${UserId}'`);
    } catch (error) {
        throw error;
    }
};

const createUser = async (data) => {
    const {username, email, senha} = data.body;

    try{
        return await databaseQuery(`INSERT INTO usuario (username, email, senha, ativo, acesso) VALUES ('${username}', '${email}', '${senha}', true, 1)`);
    }catch(error){
        throw error;
    }
}


let updateUser = async (UserId, data) => {
    try {
        if(getUserByUserId(UserId) != null){
            const {username, email, pass} = data.body;
            return await databaseQuery(`UPDATE usuario SET username = '${username}', email = '${email}', senha = '${pass}' WHERE cod_usuario = '${UserId}'`);
        }
    } catch (error) {
        throw error;
    }
    

    
};

module.exports = {
    getAllUsers,
    getUserByUserId,
    createUser,
    updateUser
};