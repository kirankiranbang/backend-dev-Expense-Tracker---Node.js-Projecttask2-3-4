// const express = require('express');
// const router = express.Router();
// const UserController = require('../controllers/UserController');

// // Create a new user account
// // router.post('/create', UserController.createUser);

// router.post('/signup', UserController.createUser);
// router.get('/signup', UserController.createUser);
// //we traveseing admin/signup to admin/login.html
// //signup to login
// router.post('/login', UserController.postloginData);



// router.get('/welcome', UserController.postloginData);





// // User login
// // router.post('/login', UserController.loginButton);

// module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
// const LoginController = require('../controllers/LoginController');

router.post('/signup', UserController.createUser);

// router.get('/admin/login', LoginController.createLoginData);
// router.post('/admin/login', LoginController.postloginData);

module.exports = router;
