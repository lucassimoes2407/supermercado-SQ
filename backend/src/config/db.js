const Pool = require("pg").Pool;

const database = new Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.PORT
});

async function databaseQuery(query){
    if(!query){return } //TODO Error handling
    const client = database.connect();
    (await client).query(query);
    (await client).release()
}

module.exports = {
    databaseQuery
};