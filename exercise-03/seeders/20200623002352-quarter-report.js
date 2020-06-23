import { parseQuarterly } from '../parser';

export async function up(queryInterface) {
  let jsonArray = await (parseQuarterly());
  jsonArray = await Promise.all(jsonArray.map(async (row) => {
    const query = `SELECT "reitId" FROM "Reit" WHERE "stockCode" = '${row.stockCode}';`;
    const reitId = await queryInterface.sequelize.query(query);
    row.reitId = reitId[0][0].reitId;
    delete row.stockCode;
    return row;
  }));

  await queryInterface.bulkInsert('QuarterReport', jsonArray, {});
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('QuarterReport', null, {});
}
