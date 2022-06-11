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

module.exports = {
    postRestriction,
    getAllRestriction,
    deleteRestriction
}