const { databaseQuery } = require("../config/db");

const getAllUsers = async () => {
    try {
        return await databaseQuery('SELECT * FROM usuario');
    } catch (error) {
        throw error;
    }
};

const getUserByUserId = async (UserId) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE cod_usuario = '${UserId}'`);
    } catch (error) {
        throw error;
    }
};

const getUserByUserName = async (UserName) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE username = '${UserName}'`);
    } catch (error) {
        throw error;
    }
};

const createUser = async (data) => {
    const {username, email, pass} = data.body;

    try{
        return await databaseQuery(`INSERT INTO usuario (username, email, senha, ativo, acesso) VALUES ('${username}', '${email}', '${pass}', true, 1)`);
    }catch(error){
        throw error;
    }
}

const updateUserStatus = async (userId) => {
    try{
        return await databaseQuery(`UPDATE ativo FROM usuario VALUES false WHERE cod_usuario = ${userId}`);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getUserByUserName,
    getUserByUserId,
    createUser,
    updateUserStatus
};