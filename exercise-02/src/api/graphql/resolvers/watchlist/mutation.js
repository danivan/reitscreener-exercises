export default {
  Mutation: {
    async addToWatchlist(root, { stockCode }, { db }) {
      const { reitId, exchange } = await db.models.Reit.findOne({
        attributes: ['reitId', 'exchange'],
        where: {
          stockCode,
        },
        raw: true,
      });

      return db.models.Watchlist.create({ reitId, stockCode, exchange })
        .then(() => true)
        .catch(() => false);
    },
    async removeFromWatchlist(root, { stockCode }, { db }) {
      return db.models.Watchlist.destroy({
        where: { stockCode },
      })
        .then(() => true)
        .catch(() => false);
    },
  },
};
