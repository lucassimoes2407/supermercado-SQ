const { databaseQuery } = require("../config/db");

// Useful queries
let getProductUser = async (productCode) => {
    try {
        var user = await databaseQuery(`
            SELECT usuario.cod_usuario, username, email, ativo  FROM usuario
            JOIN produto ON produto.cod_usuario = usuario.cod_usuario
            WHERE cod_produto = ${productCode}
        `);
        return user.rows[0];
    } catch (error) {
        throw error;
    }
}

let getProductRestrictions = async (productCode) => {
    try {
        var productRestrictions = await databaseQuery(`
            SELECT nome_restricao FROM restricao 
            JOIN produto_restricao AS pr ON pr.cod_restricao = restricao.cod_restricao
            WHERE pr.cod_produto = ${productCode}
        `);
        return productRestrictions.rows
    } catch (error) {
        throw error;
    }
}

let getProductListWithUserAndRestrictions = async (products) => {
    var productsWithUserAndRestrictions = [];
    var product_user_restrictions;

    await Promise.all(
        products.rows.map(async (product) => {
            product_user_restrictions = {
                productInfo:product,
                user: await getProductUser(product.cod_produto),
                restrictions: await getProductRestrictions(product.cod_produto)
            },
            productsWithUserAndRestrictions.push(product_user_restrictions)
        })
    );

    return {productList: productsWithUserAndRestrictions};
}


// GETS
let getAllProducts = async () => {
    try {
        var products = await databaseQuery(`
            SELECT * FROM produto
        `);

        return await getProductListWithUserAndRestrictions(products);
    } catch (error) {
        throw error;
    }
};


const getFilteredProduct = async (name, includedIngredients, excludedIngredients) => {
    try {
        var query = `SELECT * FROM produto `;

        if (name == null && includedIngredients == null && excludedIngredients == null)
        {
            console.log(query + " ORDER BY nome");
            let allProducts = await databaseQuery(query + " ORDER BY nome"); 
            return await getProductListWithUserAndRestrictions(allProducts);
        }

        query += `WHERE `

        if (name != null)
            query += `UPPER(nome) LIKE UPPER('%${name}%') AND `;

        if (includedIngredients != null)
            includedIngredients.map(ingredient => {
                if(ingredient.length > 0)
                    query += `UPPER(ingredientes) LIKE UPPER('%${ingredient}%') AND `
            });
        
        if (excludedIngredients != null)
            excludedIngredients.map(ingredient => {
                if(ingredient.length > 0)
                    query += `NOT UPPER(ingredientes) LIKE UPPER('%${ingredient}%') AND `
            });

        query = query.slice(0, query.lastIndexOf('A'));

        query += " ORDER BY nome";
        console.log(query);

        let products = await databaseQuery(query);

        return await getProductListWithUserAndRestrictions(products);

    } catch (error) {
        throw error;
    }
}

let getByProductCode = async (productCode) => {
    try {
        var product = await databaseQuery(`
            SELECT 
                cod_produto, 
                nome, 
                marca, 
                ingredientes
            FROM produto 
            WHERE cod_produto = ${productCode}`);

        return {
            productInfo: product.rows[0], 
            user: await getProductUser(productCode), 
            restrictions: await getProductRestrictions(productCode)  
        }
    } catch (error) {
        throw error;
    }
};


let getByProductName = async (productName) => {
    try {
        var products = await databaseQuery(`
            SELECT * FROM produto
            WHERE UPPER(nome) LIKE UPPER('%${productName}%')
        `);

        return await getProductListWithUserAndRestrictions(products);
    } catch (error) {
        throw error;
    }
}

let getByIngredient = async (productIngredient) => {
    try {
        var products = await databaseQuery(`
            SELECT * FROM produto
            WHERE UPPER(ingredientes) LIKE UPPER('%${productIngredient}%')
        `);

        return await getProductListWithUserAndRestrictions(products);
        } catch (error) {
        throw error;
    }
};


let getByBrand = async (productBrand) => {
    try {
        var products = await databaseQuery(`
            SELECT * FROM produto
            WHERE UPPER(marca) LIKE UPPER('%${productBrand}%')
        `);

        return await getProductListWithUserAndRestrictions(products);
        } catch (error) {
        throw error;
    }
};

let getByUser = async (productUser) => {
    try {
        var products = await databaseQuery(`
            SELECT * FROM produto
            WHERE cod_usuario = ${productUser}
        `);

        return await getProductListWithUserAndRestrictions(products);
        } catch (error) {
        throw error;
    }
};


// CREATES
let createProduct = async ({ nome, marca = null, ingredientes, img_produto = null, cod_usuario }) => {
    try {
        return await databaseQuery(
            `INSERT INTO produto 
            VALUES(
               '${nome}', 
               '${marca}', 
               '${ingredientes}', 
               '${img_produto}',
               ${cod_usuario} )`
        );
    }
    catch (error) {
        throw error;
    }
};


// UPDATES
let updateProduct = async ({ cod_produto, nome, marca, ingredientes, img_produto, cod_usuario }) => {
    try {
        return await databaseQuery(`
            UPDATE produto 
            SET
                nome = '${nome}', 
                marca = '${marca}', 
                ingredientes = '${ingredientes}', 
                img_produto = '${img_produto}', 
                cod_usuario = ${cod_usuario}
            WHERE cod_produto = ${cod_produto}`);
    } catch (error) {
        throw error;
    }
};


// DELETES
const deleteProductByCodProduct = async (codProduct) => {
    try {
        return await databaseQuery(`
            DELETE FROM produto 
            WHERE cod_produto = '${codProduct}'`);
    } catch (error) {
        throw error;
    }
}



module.exports = {
    getAllProducts,
    getFilteredProduct,
    getByProductCode,
    getByProductName,
    getByIngredient,
    getByBrand,
    getByUser,
    createProduct,
    updateProduct,
    deleteProductByCodProduct
};