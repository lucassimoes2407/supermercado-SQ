const Pool = require("pg").Pool;

const database = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.BDPORT,
    host: process.env.HOST,
    ssl: {
        rejectUnauthorized: false
    }    
});

async function databaseQuery(query){
    if(!query){return } //TODO Error handling
    
    const client = await database.connect();
    const res = await client.query(query);
    
    await client.release()
    return res;
}

module.exports = {
    databaseQuery
};