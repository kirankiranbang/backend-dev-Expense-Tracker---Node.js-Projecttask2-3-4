const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');
// const Logins = require('./logins');

const User = sequelize.define('User', {
  // Define your model attributes here
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'signups',
  timestamps: true,
});

// User.hasMany(Logins, { foreignKey: 'user_id' });

module.exports = User;
