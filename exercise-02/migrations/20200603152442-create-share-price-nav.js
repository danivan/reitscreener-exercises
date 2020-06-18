export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('SharePriceNAV', {
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
    pricePerNAVPerUnit: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('SharePriceNAV');
}
