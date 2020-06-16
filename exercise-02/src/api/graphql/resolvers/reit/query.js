export default {
  Query: {
    async reit(root, { reitId, stockCode }, { db }) {
      return db.models.Reit.findOne({
        where: {
          reitId,
          stockCode,
        },
      });
    },
    async reits(root, { exchange }, { db }) {
      return db.models.Reit.findAll({
        where: {
          exchange,
        },
      });
    },
  },
};
