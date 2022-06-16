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

const createUser = async (req, res, next) => {
    const data = req;

    try{
        await userModel.createUser(data);
        res.status(200).json("Usuário inserido com sucesso!!");
    }catch(error){
        res.status(400).json(error.message);
    }
}

const updateUserStatus = async (req, res, next) => {
    let idUser = await userModel.getUserByUserId(req.params.id);

    if(idUser.rows.length == 0){
        res.status(400).json("Usuário não encontrado!");
    }else{
        try{
            await userModel.updateUserStatus(req.params.id);
            res.status(200).json(`Usuário Nº: ${idUser.rows[0].cod_usuario}, definido como inativo.`);
        }catch(error){
            res.status(400).json(error.message);
        }
    }
}

module.exports = {
    getAllUsers,
    getUserByUserName,
    getUserByUserId,
    createUser,
    updateUserStatus
};