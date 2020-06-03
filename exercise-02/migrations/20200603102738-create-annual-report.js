'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AnnualReports', {
      annualReportId: {
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
      frequency: {
        type: Sequelize.STRING,
        allowNull: false
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
        type: Sequelize.FLOAT
      },
      declaredDPU: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false
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
    return queryInterface.dropTable('AnnualReports');
  }
};