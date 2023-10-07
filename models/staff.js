'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Staff.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    store_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};