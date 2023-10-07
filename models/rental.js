'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rental.init({
    rental_date: DataTypes.DATE,
    inventory_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    return_date: DataTypes.DATE,
    staff_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};