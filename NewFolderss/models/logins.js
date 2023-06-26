// models/Logins.js
const { DataTypes } = require('sequelize');
const sequelize = require('../util/database');
const User = require('./User');

const Logins = sequelize.define('logins', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

Logins.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Logins;
