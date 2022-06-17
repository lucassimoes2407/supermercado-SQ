const Pool = require("pg").Pool;

const database = new Pool({
    user: process.env.USER2,
    password: process.env.PASSWORD2,
    database: process.env.DATABASE2,
    port: process.env.BDPORT2,
    host: process.env.HOST2,
    ssl: {
        rejectUnauthorized: false
    }    
});

async function databaseQuery(query){
    if(!query){ throw {message: "Query não válida", status: 400}}
    try{
        const client = await database.connect();
        const res = await client.query(query);
        
        await client.release();
        return res;
    }catch(e){
        throw e;
    }
}

module.exports = {
    databaseQuery
};