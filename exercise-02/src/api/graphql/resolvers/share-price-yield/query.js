import { Op } from 'sequelize';

export default {
  Query: {
    async sharePriceYield(root, { stockCode, range }, { db }) {
      const { reitId } = await db.models.Reit.findOne({
        attributes: ['reitId'],
        where: {
          stockCode,
        },
      });
      const sharePriceYield = await db.models.SharePriceYield.findOne({
        attributes: [
          [db.fn('stddev', db.col('yield')), 'stddev'],
          [db.fn('avg', db.col('yield')), 'avg'],
        ],
        where: {
          reitId,
          date: {
            [Op.between]: [range[0], range[1]],
          },
        },
        raw: true,
      });

      const { stddev, avg } = sharePriceYield[0];

      return {
        minusSTDDEV: avg - stddev,
        minus2STDDEV: avg - (2 * stddev),
        plusSTDDEV: avg + stddev,
        plus2STDDEV: avg + (2 * stddev),
        average: avg,
        chart: db.models.SharePriceNAV.findAll({
          attributes: [
            ['yield', 'value'],
            ['date', 'label'],
          ],
          where: {
            reitId,
            date: {
              [Op.between]: [range[0], range[1]],
            },
          },
          raw: true,
        }),
      };
    },
  },
};
