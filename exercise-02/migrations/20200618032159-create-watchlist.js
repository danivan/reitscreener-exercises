export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Watchlist', {
    reitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'Reit',
        key: 'reitId',
      },
    },
    stockCode: {
      type: Sequelize.STRING,
      unique: true,
    },
    exchange: {
      type: Sequelize.ENUM,
      values: ['SGX', 'HKEX'],
    },
  });
}
export async function down(queryInterface, Sequelize) { await queryInterface.dropTable('Watchlists'); }
