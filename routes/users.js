var express = require('express')
var router = express.Router()
var router_middleware = express.Router()
var helpers = require('../middleware/session')
var userController = require('../controllers/userController')

router.get('/profile', userController.profile)

router_middleware.use('/', helpers.checkSession, router)

module.exports = router_middleware