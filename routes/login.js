var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')

router.get('/', userController.login);

module.exports = router;