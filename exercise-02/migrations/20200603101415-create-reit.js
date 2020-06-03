'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('REITs', {
      reitId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stockCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      exchange: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sector: {
        allowNull: false,
        type: Sequelize.STRING
      },
      priceCurrency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      financialCurrency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('REITs');
  }
};