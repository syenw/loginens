var express = require('express')
var router = express.Router()
var router_middleware = express.Router()
var helpers = require('../middleware/session')
var dashboardController = require('../controllers/dashboardController')

router.get('/', dashboardController.index)

router_middleware.use('/', helpers.checkSession, router)

module.exports = router_middleware