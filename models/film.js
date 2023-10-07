const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Film = sequelize.define('Film', {

    title: {
      type:DataTypes.STRING,
    },
    description: {
      type:DataTypes.TEXT,
    },
    release_year: {
      type:DataTypes.INTEGER,
    },
    language_id: {
      type:DataTypes.INTEGER,
    },
    rental_duration: {
      type:DataTypes.INTEGER,
    }, 
    rental_date: {
      type:DataTypes.DATE,
    },
    length: {
      type:DataTypes.INTEGER,
    }, 
    replacement_cost: {
      type:DataTypes.DECIMAL,

    }, 
    rating: {
      type:DataTypes.STRING,

    },
    special_features: {
      type:DataTypes.INTEGER,
    }, 
    fulltext: {
      type:DataTypes.TEXT,

    },
 
  });

  module.exports = Film;