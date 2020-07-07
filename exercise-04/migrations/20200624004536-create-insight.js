
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('Insight', {
    reitId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Reit',
        key: 'reitId',
      },
    },
    title: {
      type: Sequelize.STRING,
    },
    author: {
      type: Sequelize.STRING,
    },
    publishDate: {
      type: Sequelize.DATE,
    },
    description: {
      type: Sequelize.TEXT,
    },
    content: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.ENUM,
      values: ['news', 'blog'],
    },
  });
}
export function down(queryInterface) { return queryInterface.dropTable('Insight'); }
