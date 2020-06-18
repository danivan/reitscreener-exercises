export default {
  Query: {
    async watchlist(root, { exchange }, { db }) {
      const watchlist = await db.models.Watchlist.findAll({
        include: {
          model: db.models.Reit,
          where: {
            exchange,
          },
        },
      });

      return watchlist.map(async (item) => {
        const { price } = await db.models.SharePrice.findOne({
          attributes: [['close', 'price']],
          where: {
            reitId: item.reitId,
          },
          order: [['date', 'DESC']],
          raw: true,
        });

        return {
          reit: item.Reit,
          price,
        };
      });
    },
  },
};
