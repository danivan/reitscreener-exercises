export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('SharePrice', {
    reitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Reit',
        key: 'reitId',
      },
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    volume: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    high: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    low: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    open: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    close: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    adjClose: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    dividendAmount: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
    splitCoefficient: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('SharePrice');
}
