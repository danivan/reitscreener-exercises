import { Op } from 'sequelize';

export default {
  Query: {
    async sharePriceNAV(root, { stockCode, range }, { db }) {
      const { reitId } = await db.models.Reit.findOne({
        attributes: ['reitId'],
        where: {
          stockCode,
        },
      });
      const { stddev, avg } = await db.models.SharePriceNAV.findOne({
        attributes: [
          [db.fn('stddev', db.col('pricePerNAVPerUnit')), 'stddev'],
          [db.fn('avg', db.col('pricePerNAVPerUnit')), 'avg'],
        ],
        where: {
          reitId,
          date: {
            [Op.between]: [range[0], range[1]],
          },
        },
        raw: true,
      });

      return {
        minusSTDDEV: avg - stddev,
        minus2STDDEV: avg - (2 * stddev),
        plusSTDDEV: avg + stddev,
        plus2STDDEV: avg + (2 * stddev),
        average: avg,
        chart: db.models.SharePriceNAV.findAll({
          attributes: [
            ['pricePerNAVPerUnit', 'value'],
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
