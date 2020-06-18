export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('SharePriceYield', {
    id: {
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
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    yield: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('SharePriceYield');
}
