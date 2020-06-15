const resolvers = {
  Query: {
    async reit(root, { id, stockCode }, { db }) {
      return db.ReitModel.findAll({
        where: {
          reitId: id,
          stockCode,
        },
      });
    },
  },
};
