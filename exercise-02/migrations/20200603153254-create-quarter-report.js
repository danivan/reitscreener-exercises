export async function up (queryInterface, Sequelize) {
  await queryInterface.createTable('QuarterReport', {
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
        model: 'Reit',
        key: 'reitId'
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
    }
  });
}

export async function down (queryInterface) {
  await queryInterface.dropTable('QuarterReport');
}