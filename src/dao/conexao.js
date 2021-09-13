const { Pool}= require('pg');

const pool= new Pool({

    user:'postgres',
    host:'localhost',
    database:'NED',
    password: '123',
    port: 5432

});

/*Conexão heroku- via pool de conexões

const pool= new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized:false
    }
})
*/

module.exports= pool;