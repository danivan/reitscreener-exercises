export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Reit', {
    reitId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    stockCode: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    exchange: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    sector: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    priceCurrency: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    financialCurrency: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Reit');
}
