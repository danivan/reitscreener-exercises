export default {
  ReportFrequency: {
    ANNUAL: 'Annual',
    SEMESTER: 'Semester',
    QUARTER: 'Quarter',
  },
  Query: {
    async financialReports(root, { frequency, stockCode }, { db }) {
      const capitalizedFrequency = frequency.charAt(0) + frequency.slice(1).toLowerCase();
      const { reitId } = await db.models.Reit.findOne({
        attributes: ['reitId'],
        where: {
          stockCode,
        },
      });
      if (capitalizedFrequency === 'Annual') {
        return db.models.AnnualReport.findAndCountAll({
          where: {
            reitId,
          },
        });
      }
      return db.models.QuarterReport.findAndCountAll({
        where: {
          frequency: capitalizedFrequency,
          reitId,
        },
      });
    },
  },
};
