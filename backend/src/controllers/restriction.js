const restrictionService = require("../services/restriction");

const postRestriction = async (req, res, next) => {
    let {nome_restricao = null} = req.body;

    const response = await restrictionService.postRestriction(nome_restricao);
    const {message} = response;
    res.status(response.status || 200).json({nome_restricao, message}); 
}

const getAllRestriction = async (req, res, next) => {
    try{
        const response = await restrictionService.getAllRestriction();
        const {message, restrictions, status} = response;

        if(message) throw {status: 400, message}
    
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