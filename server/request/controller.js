const testData = require("./testData")

class Controller {
  async getInfo(req, res) {
    console.log('GET INFO')
    return res.json(testData)
  }
}

module.exports = new Controller()