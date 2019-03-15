const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'Mali',
  host: 'localhost',
  database: 'explore_products'
});

module.exports = pool;