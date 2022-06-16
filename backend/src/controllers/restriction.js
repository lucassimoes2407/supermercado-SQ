const restrictionService = require("../services/restriction");

const postRestriction = async (req, res, next) => {
    try{
        let {nome_restricao = null} = req.body;
        if(!nome_restricao) throw {
            message: "Nome inválido para restrição",
            status: 400
        }
        
        const response = await restrictionService.postRestriction(nome_restricao);
        const {message} = response;
        res.status(response.status || 200).json({nome_restricao, message}); 
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message ||`Não foi possível criar a restrição ${nome_restricao}`
        })
    }
}

const getAllRestriction = async (req, res, next) => {
    try{
        const response = await restrictionService.getAllRestriction();
        const {restrictions, status} = response;
    
        res.status(status || 200).json(restrictions);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível pegar as restrições"
        })
    }
}

const getRestrictionByCod = async (req, res, next) => {
    try{
        const { cod_restricao } = req.params
        if(isNaN(+cod_restricao)) throw {
            message: `Código da restrição recebido não é número`
        }
        
        const response = await restrictionService.getRestrictionByCod(cod_restricao);
        const {restrictions, status} = response;
    
        res.status(status || 200).json(restrictions);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível pegar a restrição"
        })
    }
}

const getCodRestrictionByName = async (req, res, next) => {
    try{
        const { nome_restricao } = req.body
        const response = await restrictionService.getCodRestrictionByName(nome_restricao);
        const {restrictions, status} = response;
    
        res.status(status || 200).json(restrictions);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível pegar a restrição"
        })
    }
}

const deleteRestriction = async (req, res, next) => {
    try{
        const { cod_restricao } = req.params
        
        if(!cod_restricao) throw {
            message: "Código de restrição inválido",
            status: 400
        }

        const response = await restrictionService.deleteRestriction(cod_restricao)
    
        res.status(response.status || 200).json(response);
    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possível deletar a restrição"
        })
    }
}

const putRestriction = async (req, res, next) => {
    try{
        const { cod_restricao } = req.params;
        const { nome_restricao } = req.body;

        if (!cod_restricao) throw {
            message: "Código de restrição inválido",
            status: 400
        }
        if (!nome_restricao) throw {
            message: "Nome de restrição inválido",
            status: 400
        }

        const response = await restrictionService.putRestriction(cod_restricao, nome_restricao.toUpperCase());
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