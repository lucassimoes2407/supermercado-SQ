const userModel = require('../models/usersModel');

const getAllUsers = async (req, res, next) => {
    try {
        let users = await userModel.getAllUsers();
        res.status(200).json(users.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getUserByUserName = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserName(req.params.username);
        res.status(200).json(user.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const getUserByUserId = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserId(req.params.id);
        res.status(200).json(user.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const createUser = async (req, res, next) => {
    const data = req;
    console.log("Aqui" + data);
    try{
        await userModel.createUser(data);
        
        res.status(200).json("Usuário inserido com sucesso!!");
    }catch(error){
        res.status(400).json(error.message);
    }
}

const deleteAllUsers = async (req, res, next) => {
    try{
        await userModel.deleteAllUsers();
        res.status(200).json("Usuários deletados com sucesso!");
    }catch(error){
        res.status(400).json(error.message);
    }
}

const deleteUserByUserName = async (req, res, next) => {
    try{
        await userModel.deleteUserByUserName(req.params.username);
        res.status(200).json("Usuário deletado com sucesso!");
    }catch(error){
        res.status(400).json(error.message);
    }
}

const deleteUserByUserId = async (req, res, next) => {
    try{
        await userModel.deleteUserByUserId(req.params.id);
        res.status(200).json("Usuário deletado com sucesso!");
    }catch(error){
        res.status(400).json(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const userExists = await userModel.getUserByUserId(req.params.id);
        if(!userExists){
            return res.status(400).send("Esse usuário não existe!");
        }
        else{
            await userModel.updateUser(req.params.id, req);
            return res.status(200).json("Usuário atualizado com sucesso!");
        }   
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserByUserName,
    getUserByUserId,
    createUser,
    deleteAllUsers,
    deleteUserByUserName,
    deleteUserByUserId,
    updateUser
};