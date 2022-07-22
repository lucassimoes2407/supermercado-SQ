const jwt = require('jsonwebtoken');
const userModel = require('../repository/userRepository');
const bcrypt = require('bcrypt');

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

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserByUserId = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserId(req.params.id);

        res.status(200).json(user);
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
    try {
        let userUsername = await userModel.getUserByUserName(req.body.username);
        let userEmail = await userModel.getUserByEmail(req.body.email);

        if (userUsername != null) {
            res.status(400).json("Este nome de usuário já está sendo utilizado!!");
        } else if (userEmail.rows.length > 0) {
            res.status(400).json("Este e-mail já está sendo utilizado!!");
        } else {
            var salt = await bcrypt.genSalt(10);
            var password = await bcrypt.hash(req.body.pass, salt);
            var cod_usuario = await userModel.createUser(req.body.username, req.body.email, password, req.body.typeUser);
            
            res.status(200).json(cod_usuario.rows[0]);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const setUserActiveAttribute = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserId(req.params.id);

        if (user == null) {
            res.status(400).json("Usuário não encontrado!!");
        } else if (user.user.ativo == true) {
            await userModel.setUserInactive(req.params.id);
            res.status(200).json(`Usuário: ${user.user.username} foi definido como inativo!!`);
        } else {
            await userModel.setUserActive(req.params.id);
            res.status(200).json(`Usuário: ${user.user.username} foi definido como ativo!!`);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateUser = async (req, res, next) => {
    try {
        let userById = await userModel.getUserByUserId(req.params.id);
        let userByUsername = await userModel.getUserByUserName(req.body.username);
        let userByEmail = await userModel.getUserByEmail(req.body.email);


        if (userById == null) {
            res.status(400).json("Usuário não encontrado!!");
        } 
        else if (userByUsername != null && (userByUsername.user.username != userById.user.username)) {
            res.status(400).json("Este nome de usuário já está sendo utilizado!!");
        } 
        else if (userByEmail.rows.length > 0 && (userByEmail.rows[0].email != userById.user.email)) {
            res.status(400).json("Este e-mail já está sendo utilizado!!");
        } 
        
        if(req.body.pass.substring(0, 7) != "$2a$10$") // Verify if password is already hashed
            req.body.pass = await bcrypt.hash(req.body.pass, 10);
        
            await userModel.updateUser(req.params.id, req);
        res.status(200).json("Usuário atualizado com sucesso!");

    } catch (error) {
        res.status(400).json(error.message);
    }
}


const deleteUserByUserId = async (req, res, next) => {
    try {
        let user = await userModel.getUserByUserId(req.params.id);

        if (user == null ) {
            res.status(400).json("Usuário não encontrado!!");
        } else {
            await userModel.deleteUserByUserId(req.params.id);
            res.status(200).json(`Usuário: ${user.user.cod_usuario}, deletado com sucesso!!`);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const login = async ( req, res, next ) => {
    try {
        var user = await userModel.getUserByUserName(req.body.username);

        if ( user == null )
            return res.status(500).json({message: 'Usuário não encontrado.'});
        if ( await bcrypt.compare(req.body.pass, user.user.senha) ) {
            let id = user.user.cod_usuario;
            const token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 3600 // expires in 1h
            });

            return res.status(200).json({ auth: true, token: token });
        }
        res.status(500).json({message: 'Login inválido!'});
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const logout = async ( req, res, next ) => {
    res.status(200).json({ auth: false, token: null });
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
    deleteUserByUserId,
    login,
    logout
};