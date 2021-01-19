// configuriamo il nostro db//

const { Pool } = require("pg");

//creamo un enviroment con pool

const pool = new Pool();

module.exports = {
  // il modo per poter fare le query su postgress. Grazie a pool
};
