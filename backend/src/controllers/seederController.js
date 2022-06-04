const { databaseQuery } = require('../config/db')
const fs = require('fs');

async function deleteTables(){
    await databaseQuery("DELETE FROM usuario_restricao")
    await databaseQuery("DELETE FROM produto_restricao")
    await databaseQuery("DELETE FROM produto")
    await databaseQuery("DELETE FROM restricao")
    await databaseQuery("DELETE FROM usuario")
}

async function resetDatabase(req, res, next){
    try{
        var sql = fs.readFileSync('seeds/seed.sql').toString();
        // await deleteTables()
        res.status(200).send({seeedFile: sql});
    }catch(e){
        console.log(e.message);
        res.status(400).send({message: e.message});
    } 
}


module.exports = resetDatabase;