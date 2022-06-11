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

module.exports = {
    postRestriction,
    getAllRestriction
}