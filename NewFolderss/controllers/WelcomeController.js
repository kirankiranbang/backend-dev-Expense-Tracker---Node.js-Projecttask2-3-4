// const User = require('../models/User');
// const Logins = require('../models/logins');


// // exports.getWelcomePage = (req, res) => {
// //     // Check if the user is logged in successfully
// //     if (req.session.isLoggedIn) {
// //       // User is logged in
// //       res.send(`<h1>Welcome, ${req.session.user.email}!</h1>`);
// //     } else {
// //       // User is not logged in
// //       res.redirect('/login');
// //     }
// //   };


// exports.getWelcomePage = (req, res) => {
//     res.sendFile('welcome.html', { root: 'public' });
//   };