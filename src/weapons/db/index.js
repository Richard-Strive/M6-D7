// configuriamo il nostro db//

const { query } = require("express");
const { Pool } = require("pg");

//creamo un enviroment con pool

const pool = new Pool();

module.exports = {
  // il modo per poter fare le query/le ricerche su postgress. Grazie a pool.

  async query(text, params) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.info("Query executed in", duration, "ms");

    return res;
  },
  pool,
};
