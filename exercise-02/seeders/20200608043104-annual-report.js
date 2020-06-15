import fs from 'fs';
import csvtojson from 'csvtojson';
import path from 'path';

export async function up(queryInterface) {
  const pathDir = path.join(__dirname, '../../seed-02/annual-reports');

  const fileArray = fs.readdirSync(pathDir);
  await fileArray.reduce(async (finalArray, file2) => {
    const pathToFile = `${pathDir}/${file2}`;
    const stockCode = file2.substring(0, file2.length - 4);
    const query = `SELECT "reitId" FROM "Reit" WHERE "stockCode" = '${stockCode}';`;

    const reitId = await queryInterface.sequelize.query(query);
    let jsonArray = await csvtojson().fromFile(pathToFile);
    jsonArray = jsonArray.map((json) => ({
      reitId: reitId[0][0].reitId,
      ...json,
    }));

    await queryInterface.bulkInsert('AnnualReport', jsonArray, {});
  }, []);
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('AnnualReport', null, {});
}
