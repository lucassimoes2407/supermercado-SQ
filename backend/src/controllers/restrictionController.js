const restrictionModel = require("../models/restrictionModel");

const postRestriction = async (req, res, next) => {
    /* 
        #swagger.tags = ['Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Cria uma restrição' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'postRestriction' // Identificador único do endpoint
        #swagger.description = 'Cria uma restrição com base no nome' // Descrição do endpoint
        #swagger.parameters['nome_restricao'] = { // Atributos que o endpoint recebe
               in: 'body', // local de onde é adquirido, params, query, ou body
               description: 'Nome de uma restrição',
               required: true,
               schema: { nome_restricao: 'string' },
        }
    */
    try{
        let {nome_restricao = null} = req.body;
        if(!nome_restricao) throw {
            message: "Nome inválido para restrição",
            status: 400
        }

        const restrictionExists = await restrictionModel.getCodRestrictionByName(nome_restricao);
        if(restrictionExists.restrictions.length < 1) throw {
            message: "Restrição já existe"
        }
        
        const response = await restrictionModel.postRestriction(nome_restricao);
        const {message} = response;
        res.status(response.status || 200).json({nome_restricao, message}); 
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message ||`Não foi possível criar a restrição ${nome_restricao}`
        })
    }
}

const getAllRestriction = async (req, res, next) => {
    // #swagger.tags = ['Restrição']
    try{
        const response = await restrictionModel.getAllRestriction();
        const {restrictions, status} = response;
    
        res.status(status || 200).json(restrictions);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível pegar as restrições"
        })
    }
}

const getRestrictionByCod = async (req, res, next) => {
    // #swagger.tags = ['Restrição']
    try{
        const { cod_restricao = null} = req.params;
        if(isNaN(+cod_restricao)) throw {
            message: `Código da restrição recebido não é número`
        }
        
        const response = await restrictionModel.getRestrictionByCod(cod_restricao);
        const {restrictions, status} = response;
    
        res.status(status || 200).json(restrictions);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível pegar a restrição"
        })
    }
}

const getCodRestrictionByName = async (req, res, next) => {
    // #swagger.tags = ['Restrição']
    try{
        const { nome_restricao = null} = req.body;
        if(!nome_restricao) throw {
            message: "Nome de restrição válido não fornecido",
            status: 400
        }

        const response = await restrictionModel.getCodRestrictionByName(nome_restricao);
        const {restrictions, status} = response;
    
        res.status(status || 200).json(restrictions);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível pegar a restrição"
        })
    }
}

const deleteRestriction = async (req, res, next) => {
    // #swagger.tags = ['Restrição']
    try{
        const { cod_restricao = null } = req.params
        if(isNaN(+cod_restricao)) throw {
            message: "Código de restrição inválido",
            status: 400
        }

        let { restrictions } = await restrictionModel.getRestrictionByCod(cod_restricao);
        if(restrictions.length === 0) throw {
            message: "Restrição não encontrada",
            status: 400
        }

        const response = await restrictionModel.deleteRestriction(cod_restricao);
    
        res.status(response.status || 200).json(response);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível deletar a restrição"
        });
    }
}

const putRestriction = async (req, res, next) => {
    // #swagger.tags = ['Restrição']
    try{
        const { cod_restricao } = req.params;
        const { nome_restricao } = req.body;

        if (isNaN(+cod_restricao)) throw {
            message: "Código de restrição inválido",
            status: 400
        }
        if (!nome_restricao) throw {
            message: "Nome de restrição inválido",
            status: 400
        }

        const response = await restrictionModel.putRestriction(cod_restricao, nome_restricao.toUpperCase());
        res.status(response.status || 200).json(response);
    
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível alterar a restrição"
        })
    }
}

module.exports = {
    postRestriction,
    getAllRestriction,
    getRestrictionByCod,
    getCodRestrictionByName,
    deleteRestriction,
    putRestriction
}