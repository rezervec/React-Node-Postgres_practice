const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: '123',
  host: "localhost",
  port: 5432,
  database: "react_node_postgres"
})

module.exports = pool