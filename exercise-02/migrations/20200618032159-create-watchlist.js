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
  });
}
export async function down(queryInterface) { await queryInterface.dropTable('Watchlists'); }
