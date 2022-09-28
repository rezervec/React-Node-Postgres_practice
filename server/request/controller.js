const db = require('../db/db')

class Controller {
  async getInfo(req, res) {
    const rows = await db.query('SELECT * FROM rowtable')
    res.send(rows)
  }
}

module.exports = new Controller()