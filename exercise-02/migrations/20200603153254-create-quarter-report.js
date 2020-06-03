'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuarterReports', {
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
      period: {
        allowNull: false,
        type: Sequelize.STRING
      },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      announcementDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      auditedNAVPerUnit: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      declaredDPU: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      link: {
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
    return queryInterface.dropTable('QuarterReports');
  }
};