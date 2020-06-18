export default {
  Mutation: {
    async addToWatchlist(root, { stockCode }, { db }) {
      const { reitId } = await db.models.Reit.findOne({
        attributes: ['reitId'],
        where: {
          stockCode,
        },
        raw: true,
      });

      return db.models.Watchlist.create({ reitId })
        .then(() => true)
        .catch(() => false);
    },
    async removeFromWatchlist(root, { stockCode }, { db }) {
      const { reitId } = await db.models.Reit.findOne({
        attributes: ['reitId'],
        where: {
          stockCode,
        },
        raw: true,
      });

      return db.models.Watchlist.destroy({
        where: { reitId },
      })
        .then(() => true)
        .catch(() => false);
    },
  },
};
