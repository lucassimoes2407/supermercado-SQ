const userModel = require('../models/userModel');

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
    let user = await userModel.getUserByUserName(req.body.username);
    let user2 = await userModel.getUserByEmail(req.body.email);

    if(user.rows.length > 0){
        res.status(400).json("Este nome de usuário já está sendo utilizado!!");
    }else if(user2.rows.length > 0){
        res.status(400).json("Este e-mail já está sendo utilizado!!");
    }else{
        try{
            await userModel.createUser(req);
            res.status(200).json("Usuário inserido com sucesso!!");
        }catch(error){
            res.status(400).json(error.message);
        }
    }
}

const setUserActiveAttribute = async (req, res, next) => {
    let user = await userModel.getUserByUserId(req.params.id);

    if(user.rows.length == 0){
        res.status(400).json("Usuário não encontrado!!");
        
    }else if(user.rows[0].ativo == true){
        try{
            await userModel.setUserInactive(req.params.id);
            res.status(200).json(`Usuário: ${user.rows[0].username} foi definido como inativo!!`);
        }catch(error){
            res.status(400).json(error.message);
        }
    }
    else {
        try{
            await userModel.setUserActive(req.params.id);
            res.status(200).json(`Usuário: ${user.rows[0].username} foi definido como ativo!!`);
        }catch(error){
            res.status(400).json(error.message);
        }
    }
}

const updateAccessUser = async (req, res, next) => {
    let user = await userModel.getUserByUserId(req.params.id);
    let newAccess = req.body;
    console.log(typeof(user.rows[0].acesso))
    if(user.rows.length == 0){
        res.status(400).json("Usuário não encontrado!!");
    }else if(user.rows[0].acesso == newAccess){
        return res.status(400).json(`O acesso do usuário: ${user.rows[0].username}, já está definido como ${newAccess}!!`);
    }else{
        try {
            await userModel.updateAccessUser(newAccess, user.rows[0].cod_usuario);
            res.status(200).json(`Acesso do usuário: ${user.rows[0].username} modificado para ${newAccess}!!`);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}

const updateUser = async (req, res, next) => {
    let userExists = await userModel.getUserByUserId(req.params.id);
    let user = await userModel.getUserByUserName(req.body.username);
    let user2 = await userModel.getUserByEmail(req.body.email);

    if(userExists.rows.length == 0){
        res.status(400).json("Usuário não encontrado!!");
    }else if(user.rows.length > 0 && (user.rows[0].username != userExists.rows[0].username)){
        res.status(400).json("Este nome de usuário já está sendo utilizado!!");
    }else if(user2.rows.length > 0 && (user2.rows[0].email != userExists.rows[0].email)){
        res.status(400).json("Este e-mail já está sendo utilizado!!");
    }else{
        try {
            await userModel.updateUser(req.params.id, req);
            res.status(200).json("Usuário atualizado com sucesso!");
        } catch (error) {
            res.status(400).json(error.message);
        }
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
    updateAccessUser,
    updateUser
};