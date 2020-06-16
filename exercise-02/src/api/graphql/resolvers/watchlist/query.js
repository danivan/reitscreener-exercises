export default {
  Query: {
    async watchlist(root, { exchange }, { db }) {
      const watchlist = await db.models.Watchlist.findAll({
        where: {
          exchange,
        },
        raw: true,
      });

      return watchlist.map(async (item) => {
        const reit = await db.models.Reit.findAll({
          where: {
            stockCode: item.stockCode,
          },
          raw: true,
        });

        const { price } = await db.models.SharePrice.findOne({
          attributes: [['close', 'price']],
          where: {
            reitId: reit[0].reitId,
          },
          order: [['date', 'DESC']],
          raw: true,
        });

        return {
          reit: reit[0],
          price,
        };
      });
    },
  },
};
