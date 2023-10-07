const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Actor = sequelize.define('Actor', {
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
});

module.exports = Actor;
