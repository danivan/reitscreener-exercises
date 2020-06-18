export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Watchlists', {
    reitId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Reit',
        key: 'reitId',
      },
    },
    stockCode: {
      type: Sequelize.STRING,
    },
    exchange: {
      type: Sequelize.ENUM,
      values: ['SGX', 'HKEX'],
    },
  });
}
export function down(queryInterface, Sequelize) { return queryInterface.dropTable('Watchlists'); }
