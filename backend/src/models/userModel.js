const { databaseQuery } = require("../config/db");

const getAllUsers = async () => {
    try {
        return await databaseQuery('SELECT * FROM usuario');
    } catch (error) {
        throw error;
    }
};

const getUserByUserId = async (userId) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE cod_usuario = '${userId}'`);
    } catch (error) {
        throw error;
    }
};

const getUserByUserName = async (userName) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE username = '${userName}'`);
    } catch (error) {
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        return await databaseQuery(`SELECT * FROM usuario WHERE email = '${email}'`);
    } catch (error) {
        throw error;
    }
};

const getUsersActive = async () => {
    try {
        return await databaseQuery('SELECT * FROM usuario WHERE ativo = true ORDER BY cod_usuario');
    } catch (error) {
        throw error;
    }
}

const getUsersInactive = async () => {
    try {
        return await databaseQuery('SELECT * FROM usuario WHERE ativo = false ORDER BY cod_usuario');
    } catch (error) {
        throw error;
    }
}

const createUser = async (req) => {
    const {username, email, pass, typeUser} = req.body;

    try{
        return await databaseQuery(`INSERT INTO usuario (username, email, senha, ativo, acesso) VALUES ('${username}', '${email}', '${pass}', true, '${typeUser}')`);
    }catch(error){
        throw error;
    }
}

const setUserInactive = async (userId) => {
    try{
        return await databaseQuery(`UPDATE usuario SET ativo=false WHERE cod_usuario = ${userId}`);
    }catch(error){
        throw error;
    }
}

const setUserActive = async (userId) => {
    try{
        return await databaseQuery(`UPDATE usuario SET ativo=true WHERE cod_usuario = ${userId}`);
    }catch(error){
        throw error;
    }
}

const updateUser = async (userId, req) => {
    try {
        const {username, email, pass} = req.body;
        
        return await databaseQuery(`UPDATE usuario SET username = '${username}', email = '${email}', senha = '${pass}' WHERE cod_usuario = '${userId}'`);
    } catch (error) {
        throw error;
    }
};

const deleteUserByUserName = async (username) => {
    try {
        return await databaseQuery(`DELETE FROM usuario WHERE username = '${username}'`);
    } catch (error) {
        throw error;
    }
};

const deleteUserByUserId = async (userId) => {
    try {
        return await databaseQuery(`DELETE FROM usuario WHERE cod_usuario = ${userId}`);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllUsers,
    getUserByUserName,
    getUserByUserId,
    getUserByEmail,
    getUsersActive,
    getUsersInactive,
    createUser,
    setUserActive,
    setUserInactive,
    updateUser,
    deleteUserByUserName,
    deleteUserByUserId
};