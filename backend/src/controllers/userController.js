const userModel = require('../models/userModel');

const getAllUsers = async (req, res, next) => {
    try {
        let users = await userModel.getAllUsers();
        res.status(200).json(users.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserByUserName = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserName(req.params.username);
    
        if(user.rows.length == 0){
            res.status(400).json(`Não existe um usuário com o username ${req.params.username}!!`);
        }else{
            res.status(200).json(user.rows);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserByUserId = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserId(req.params.id);
    
        if(user.rows.length == 0){
            res.status(400).json(`Não existe um usuário com o username ${req.params.id}!!`);
        }else{
            res.status(200).json(user.rows);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUsersActive = async (req, res, next) => {
    try {
        let users = await userModel.getUsersActive();
        res.status(200).json(users.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUsersInactive = async (req, res, next) => {
    try {
        let users = await userModel.getUsersInactive();
        res.status(200).json(users.rows);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createUser = async (req, res, next) => {
    try{
        let userUsername = await userModel.getUserByUserName(req.body.username);
        let userEmail = await userModel.getUserByEmail(req.body.email);

        if(userUsername.rows.length > 0){
            res.status(400).json("Este nome de usuário já está sendo utilizado!!");
        }else if(userEmail.rows.length > 0){
            res.status(400).json("Este e-mail já está sendo utilizado!!");
        }else{
            await userModel.createUser(req);
            res.status(200).json("Usuário inserido com sucesso!!");
        }
    }catch(error){
        res.status(400).json(error.message);
    }
}

const setUserActiveAttribute = async (req, res, next) => {
    try{
        let user = await userModel.getUserByUserId(req.params.id);

        if(user.rows.length == 0){
            res.status(400).json("Usuário não encontrado!!");
        }else if(user.rows[0].ativo == true){
            await userModel.setUserInactive(req.params.id);
            res.status(200).json(`Usuário: ${user.rows[0].username} foi definido como inativo!!`);
        }else {
            await userModel.setUserActive(req.params.id);
            res.status(200).json(`Usuário: ${user.rows[0].username} foi definido como ativo!!`);
        }
    }catch(error){
        res.status(400).json(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        let userById = await userModel.getUserByUserId(req.params.id);
        let userByUsername = await userModel.getUserByUserName(req.body.username);
        let userByEmail = await userModel.getUserByEmail(req.body.email);

        let usernameNotUnique = (userByUsername.rows[0].username != userById.rows[0].username);
        let emailNotUnique = (userByEmail.rows[0].email != userById.rows[0].email);

        if(userById.rows.length == 0){
            res.status(400).json("Usuário não encontrado!!");
        }else if(userByUsername.rows.length > 0 && usernameNotUnique){
            res.status(400).json("Este nome de usuário já está sendo utilizado!!");
        }else if(userByEmail.rows.length > 0 && emailNotUnique){
            res.status(400).json("Este e-mail já está sendo utilizado!!");
        }else{
            await userModel.updateUser(req.params.id, req);
            res.status(200).json("Usuário atualizado com sucesso!");
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUserByUserName = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserName(req.params.username);

        if(user.rows.length == 0){
            res.status(400).json("Usuário não encontrado!!");
        }else{
            await userModel.deleteUserByUserName(req.params.username);
            res.status(200).json(`Usuário: ${user.rows[0].username}, deletado com sucesso!!`);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUserByUserId = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserId(req.params.id);

        if(user.rows.length == 0){
            res.status(400).json("Usuário não encontrado!!");
        }else{
            await userModel.deleteUserByUserId(req.params.id);
            res.status(200).json(`Usuário: ${user.rows[0].cod_usuario}, deletado com sucesso!!`);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUserByUserName,
    getUserByUserId,
    getUsersActive,
    getUsersInactive,
    createUser,
    setUserActiveAttribute,
    updateUser,
    deleteUserByUserName,
    deleteUserByUserId
};