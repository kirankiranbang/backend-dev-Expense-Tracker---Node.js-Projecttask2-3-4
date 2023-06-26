const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');


router.post('/login', LoginController.postLoginData);
//  router.get('/', LoginController.createLoginData);


module.exports = router;