export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('QuarterReport', {
    reitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Reit',
        key: 'reitId',
      },
    },
    frequency: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    period: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    year: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    financialYear: {
      type: Sequelize.STRING,
    },
    reportingPeriod: {
      type: Sequelize.STRING,
    },
    asAtDate: {
      type: Sequelize.DATE,
    },
    announcementDate: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    exDividendDate: {
      type: Sequelize.DATE,
    },
    audited: {
      type: Sequelize.BOOLEAN,
    },
    currency: {
      type: Sequelize.STRING,
    },
    auditedNAVPerUnit: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    declaredDPU: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    link: {
      type: Sequelize.STRING,
    },
    financialStatement: {
      type: Sequelize.STRING,
    },
    pressRelease: {
      type: Sequelize.STRING,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('QuarterReport');
}
