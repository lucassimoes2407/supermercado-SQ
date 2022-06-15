const { databaseQuery } = require("../config/db");

const getAllUsers = async () => {
    try {
        return await databaseQuery('SELECT * FROM usuario');
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

const getUserByUserId = async (UserId) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE cod_usuario = '${UserId}'`);
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

const deleteAllUsers = async () => {
    try{
        return await databaseQuery(`DELETE * FROM usuario`);
    }catch(error){
        throw error;
    }
}

const deleteUserByUserName = async (userName) => {
    try{
        return await databaseQuery(`DELETE FROM usuario WHERE username = '${userName}'`);
    }catch(error){
        throw error;
    }
}

const deleteUserByUserId = async (userId) => {
    try{
        return await databaseQuery(`DELETE FROM usuario WHERE cod_usuario = '${userId}'`);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getUserByUserName,
    getUserByUserId,
    createUser,
    deleteAllUsers,
    deleteUserByUserName,
    deleteUserByUserId
};