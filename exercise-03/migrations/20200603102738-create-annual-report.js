export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('AnnualReport', {
    annualReportId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    reitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Reit',
        key: 'reitId',
      },
    },
    frequency: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    year: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    announcementDate: {
      allowNull: false,
      type: Sequelize.DATE,
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
    exDividendDate: {
      type: Sequelize.DATE,
    },
    audited: {
      type: Sequelize.BOOLEAN,
    },
    currency: {
      type: Sequelize.STRING,
    },
    unitsBasic: {
      type: Sequelize.FLOAT,
    },
    unitsDiluted: {
      type: Sequelize.FLOAT,
    },
    revenue: {
      type: Sequelize.FLOAT,
    },
    propertyExpenses: {
      type: Sequelize.FLOAT,
    },
    netPropertyIncome: {
      type: Sequelize.FLOAT,
    },
    incomeSupport: {
      type: Sequelize.FLOAT,
    },
    financeCost: {
      type: Sequelize.FLOAT,
    },
    managementFee: {
      type: Sequelize.FLOAT,
    },
    trusteeFee: {
      type: Sequelize.STRING,
    },
    resultsFromAssociattes: {
      type: Sequelize.STRING,
    },
    resultFromJVs: {
      type: Sequelize.STRING,
    },
    auditedNAVPerUnit: {
      type: Sequelize.FLOAT,
    },
    declaredDPU: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    link: {
      type: Sequelize.STRING,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('AnnualReport');
}
