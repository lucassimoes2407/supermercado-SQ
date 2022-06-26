const productRestrictionModel = require('../repository/productRestrictionRepository');

function verifyCodProduct(cod_produto){
    if(!cod_produto) throw {
        message: "cod_produto não fornecido",
        status: 400
    }
}
function verifyCodRestriction(cod_restricao){
    if(!cod_restricao) throw {
    message: "cod_restricao não fornecido",
    status: 400
}}

const getProductRestriction = async (req, res, next)=>{
    // #swagger.tags = ['Restrição']
    /* 
        #swagger.tags = ['Produto-Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Obtem Restrições de um Produto' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'getProductRestriction' // Identificador único do endpoint
        #swagger.description = 'Obtem uma lista de restrições alimentares com base no Codigo do Produto' // Descrição do endpoint
        #swagger.parameters['cod_produto'] = { // Atributos que o endpoint recebe
               in: 'params', // local de onde é adquirido, params, query, ou body
               description: 'Código de um produto',
               required: true,
        }
    */
    try{
        const { cod_produto } = req.params;
    
        if(isNaN(+cod_produto)) throw {
            message: `Código do produto recebido não é número`
        }
        
        verifyCodProduct(cod_produto);

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
    // #swagger.tags = ['Restrição']
    /* 
        #swagger.tags = ['Produto-Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Associa uma restrição a um produto' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'postProductRestriction' // Identificador único do endpoint
        #swagger.description = 'Associa uma restrição alimentar a um produto recebendo o codigo da restrição e o codigo do produto' // Descrição do endpoint
        #swagger.parameters['cod_produto'] = { // Atributos que o endpoint recebe
               in: 'params', 'body', // local de onde é adquirido, params, query, ou body
               description: 'Código de um produto e codigo de uma restrição',
               required: true,
               schema: { cod_restricao: 'integer' },
        }
    */
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

        verifyCodProduct(cod_produto);
        verifyCodRestriction(cod_restricao);

        const response = await productRestrictionModel.postProductRestriction(cod_produto, cod_restricao);
        const { message, status } = response;

        res.status(status).json({message: message});
    } catch(e){
        res.status(e.status || 400).json({message: e.message || "Não foi possivel associar restrição ao produto"})
    }
}

const deleteProductRestriction = async (req, res, next)=>{
    // #swagger.tags = ['Restrição']
    /* 
        #swagger.tags = ['Produto-Restrição'] // Define a que grupo de endpoints pertence
        #swagger.summary = 'Desassocia uma restrição de um produto' // Resumo da responsabilidade do endpoint
        #swagger.operationId = 'deleteProductRestriction' // Identificador único do endpoint
        #swagger.description = 'Desassocia uma restrição alimentar de um produto recebendo o codigo da restrição e o codigo do produto' // Descrição do endpoint
        #swagger.parameters['cod_produto'] = { // Atributos que o endpoint recebe
               in: 'params', 'body', // local de onde é adquirido, params, query, ou body
               description: 'Código de um produto e codigo de uma restrição',
               required: true,
               schema: { cod_restricao: 'integer' },
        }
    */
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

        verifyCodProduct(cod_produto);
        verifyCodRestriction(cod_restricao);
        
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