const restrictionService = require("../services/restriction");

const postRestriction = async (req, res, next) => {
    let {nome_restricao = null} = req.body;

    const response = await restrictionService.postRestriction(nome_restricao);
    const {message} = response;
    res.status(response.status || 200).json({nome_restricao, message});
    
}

module.exports = {
    postRestriction
}