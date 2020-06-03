'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SharePriceNAVs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reitId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: REIT,
          key: reitId
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pricePerNAVPerUnit: {
        allowNull: false,
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('SharePriceNAVs');
  }
};