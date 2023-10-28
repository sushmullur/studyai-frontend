const { Pool } = require("pg");

const pool = new Pool();

pool.on('error', (err) => {
    console.error('Unexpected')

})