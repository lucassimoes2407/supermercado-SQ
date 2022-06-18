const userRestrictionModel = require('../models/userRestrictionModel');

const getUserRestriction = async (req, res, next)=>{
    try{
        const { cod_usuario } = req.params;

        if(isNaN(+cod_usuario)) throw {
            message: `Código do usuario recebido não é número`
        }

        const response = await userRestrictionModel.getUserRestriction(cod_usuario);
        const { restrictions, status } = response;

        res.status(status || 200).json(restrictions);

    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possivel pegar as restrições"
        });
    }
}

const postUserRestriction = async (req, res, next)=>{
    try{
        const { cod_usuario } = req.params;
        const { cod_restricao } = req.body;
        
        if(isNaN(+cod_usuario) && isNaN(+cod_restricao)) throw {
            message: 'Códigos de restrição e usuário recebidos não são números'
        }
        if(isNaN(+cod_usuario)) throw {
            message: 'Código do usuario recebido não é número'
        }
        if(isNaN(+cod_restricao)) throw {
            message: 'Código da restrição recebido não é número'
        }

        const response = await userRestrictionModel.postUserRestriction(cod_usuario, cod_restricao);
        const { message, status } = response;

        res.status(status).json({message: message});
    } catch(e){
        res.status(e.status || 400).json({message: e.message || "Não foi possivel associar restrição ao usuario"})
    }
}

const deleteUserRestriction = async (req, res, next)=>{
    try{
        const { cod_usuario } = req.params;
        const { cod_restricao } = req.body;
        
        if(isNaN(+cod_usuario) && isNaN(+cod_restricao)) throw {
            message: 'Códigos de restrição e usuário recebidos não são números'
        }
        if(isNaN(+cod_usuario)) throw {
            message: 'Código do usuario recebido não é número'
        }
        if(isNaN(+cod_restricao)) throw {
            message: 'Código da restrição recebido não é número'
        }
        
        const response = await userRestrictionModel.deleteUserRestriction(cod_usuario, cod_restricao);
        const { message, status } = response;

        res.status(status).json({message: message});
    }catch (e){
        res.status(e.status || 400).json({message: e.message || "Não foi possivel desassociar restrição do usuario"});
    }
}

module.exports = {
    getUserRestriction,
    postUserRestriction,
    deleteUserRestriction
}