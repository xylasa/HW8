'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      release_year: {
        type: Sequelize.INTEGER
      },
      language_id: {
        type: Sequelize.INTEGER
      },
      rental_duration: {
        type: Sequelize.INTEGER
      },
      rental_date: {
        type: Sequelize.DATE
      },
      length: {
        type: Sequelize.INTEGER
      },
      replacement_cost: {
        type: Sequelize.DECIMAL
      },
      rating: {
        type: Sequelize.STRING
      },
      special_features: {
        type: Sequelize.STRING
      },
      fulltext: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Films');
  }
};