const express = require('express');
const bodyParser = require('body-parser');


const userRoutes = require('./routes/UserRoutes');
const loginRoutes = require('./routes/LoginRoutes');
const welcomeRoutes = require('./routes/WelcomeRoutes');

const app = express();
const sequelize = require('./util/database');
 const Logins = require('./models/logins');
const User = require('./models/User');


const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());



// Routes
app.use('/admin', express.static('public'));



// http://localhost:4000/admin/login
//hoisting through this path
 app.use('/admin/signup', express.static('public/signup.html'));
app.use('/admin', userRoutes);

app.use('/admin/login', express.static('public/login.html'));
app.use('/admin', loginRoutes);


// app.use('/admin/welcome', express.static('public/welcome.html'));
// app.use('/admin', welcomeRoutes);


// User.hasMany(Logins, { foreignKey: 'user_id' }); // User has many Logins
// Logins.belongsTo(User, { foreignKey: 'user_id' }); // Logins belongs to User

// Logins.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// Logins.belongsTo(User)
// User.hasOne(Logins);
//  User.hasMany(Logins);


sequelize.sync()
  .then(() => {
    console.log('MySQL database synced');
    const port = 4000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing MySQL database:', error);
  });

















// Set up Sequelize models and sync with the database
// .sync({ force: true })
// sequelize
//   .sync()
//   .then(() => {
//     console.log('MySQL database synced');

//     // Find or create a user
//     return User.findOrCreate({
//       where: { id: 1 },
//       defaults: { name: 'Max', email: 'test@test.com' }
//     });
//   })
//   .then(([user, created]) => {
//     // The user object will be the found or created user
//     // You can perform further operations with the user object if needed

//     // Create a cart for the user
//     return user.createLogins();
//   })
//   .then(cart => {
//     const port = 4000;
//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });