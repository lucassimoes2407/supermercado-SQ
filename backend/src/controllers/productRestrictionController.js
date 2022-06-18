const productRestrictionModel = require('../models/productRestrictionModel');

const getProductRestriction = async (req, res, next)=>{
    try{
        const { cod_produto } = req.params;

        if(isNaN(+cod_produto)) throw {
            message: `Código do produto recebido não é número`
        }

        const response = await productRestrictionModel.getProductRestriction(cod_produto);
        const { restrictions, status } = response;

        res.status(status || 200).json(restrictions);

    }catch(e){
        res.status(e.status || 400).json({
            message: e.message || "Não foi possivel pegar as restrições"
        });
    }
}

const postProductRestriction = async (req, res, next)=>{
    try{
        const { cod_produto } = req.params;
        const { cod_restricao } = req.body;
        
        if(isNaN(+cod_produto) && isNaN(+cod_restricao)) throw {
            message: 'Códigos de restrição e produto recebidos não são números'
        }
        if(isNaN(+cod_produto)) throw {
            message: 'Código do produto recebido não é número'
        }
        if(isNaN(+cod_restricao)) throw {
            message: 'Código da restrição recebido não é número'
        }

        const response = await productRestrictionModel.postProductRestriction(cod_produto, cod_restricao);
        const { message, status } = response;

        res.status(status).json({message: message});
    } catch(e){
        res.status(e.status || 400).json({message: e.message || "Não foi possivel associar restrição ao produto"})
    }
}

const deleteProductRestriction = async (req, res, next)=>{
    try{
        const { cod_produto } = req.params;
        const { cod_restricao } = req.body;
        
        if(isNaN(+cod_produto) && isNaN(+cod_restricao)) throw {
            message: 'Códigos de restrição e produto recebidos não são números'
        }
        if(isNaN(+cod_produto)) throw {
            message: 'Código do produto recebido não é número'
        }
        if(isNaN(+cod_restricao)) throw {
            message: 'Código da restrição recebido não é número'
        }
        
        const response = await productRestrictionModel.deleteProductRestriction(cod_produto, cod_restricao);
        const { message, status } = response;

        res.status(status).json({message: message});
    }catch (e){
        res.status(e.status || 400).json({message: e.message || "Não foi possivel desassociar restrição do produto"});
    }
}

module.exports = {
    getProductRestriction,
    postProductRestriction,
    deleteProductRestriction
}