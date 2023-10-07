'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    payment_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    staff_id: DataTypes.INTEGER,
    rental_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    payment_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};