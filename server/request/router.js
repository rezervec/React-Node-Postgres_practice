const Router = require('express')
const router = new Router()
const Controller = require('./controller.js')

router.get('/', Controller.getInfo)

module.exports = router