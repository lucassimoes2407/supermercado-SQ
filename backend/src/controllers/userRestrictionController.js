const userRestrictionModel = require('../models/userRestrictionModel');

const getUserRestriction = async (req, res, next)=>{
    // #swagger.tags = ['Restrição']
    /* 
        #swagger.tags = ['Usuario-Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Obtem Restrições de um Usuario' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'getUserRestriction' // Identificador único do endpoint
        #swagger.description = 'Obtem uma lista de restrições alimentares com base no Codigo do Usuario' // Descrição do endpoint
        #swagger.parameters['cod_usuario'] = { // Atributos que o endpoint recebe
               in: 'params', // local de onde é adquirido, params, query, ou body
               description: 'Código de um usuario',
               required: true,
        }
    */
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
    // #swagger.tags = ['Restrição']
    /* 
        #swagger.tags = ['Usuario-Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Associa uma restrição a um usuario' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'postUserRestriction' // Identificador único do endpoint
        #swagger.description = 'Associa uma restrição alimentar a um usuario recebendo o codigo da restrição e o codigo do usuario' // Descrição do endpoint
        #swagger.parameters['cod_usuario'] = { // Atributos que o endpoint recebe
               in: 'params', 'body', // local de onde é adquirido, params, query, ou body
               description: 'Código de um usuario e codigo de uma restrição',
               required: true,
               schema: { cod_restricao: 'integer' },
        }
    */
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
    // #swagger.tags = ['Restrição']
    /* 
        #swagger.tags = ['Usuario-Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Desassocia uma restrição de um usuario' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'deleteUserRestriction' // Identificador único do endpoint
        #swagger.description = 'Desassocia uma restrição alimentar de um usuario recebendo o codigo restrição e o codigo do usuario' // Descrição do endpoint
        #swagger.parameters['cod_usuario'] = { // Atributos que o endpoint recebe
               in: 'params', 'body', // local de onde é adquirido, params, query, ou body
               description: 'Código de um usuario e codigo de uma restrição',
               required: true,
               schema: { cod_restricao: 'integer' },
        }
    */
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