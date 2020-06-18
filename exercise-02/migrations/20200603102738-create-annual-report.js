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
    auditedNAVPerUnit: {
      type: Sequelize.FLOAT,
    },
    declaredDPU: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('AnnualReport');
}
