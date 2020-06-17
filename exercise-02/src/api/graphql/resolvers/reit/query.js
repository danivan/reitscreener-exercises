export default {
  Query: {
    async reit(root, { reitId, stockCode }, { db }) {
      let where = {
        stockCode,
      };

      if (reitId) {
        where = {
          reitId,
        };
      }

      return db.models.Reit.findOne({
        where,
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
