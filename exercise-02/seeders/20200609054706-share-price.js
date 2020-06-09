import fs from 'fs';
import path from 'path';

export async function up (queryInterface, Sequelize) {
  const pathDir = path.join(__dirname, '../../seed-02/share-price');
  
  const fileArray = fs.readdirSync(pathDir);
  await fileArray.reduce( async (finalArray, file2) => {
    const pathToFile = `${pathDir}/${file2}`;
    const stockCode = file2.substring(0, file2.length - 5);
    const query = `SELECT "reitId" FROM "Reit" WHERE "stockCode" = '${stockCode}';`

    const reitId = await queryInterface.sequelize.query(query);
    
    let jsonArray = fs.readFileSync(pathToFile);
    jsonArray = jsonArray.toString('utf8');
    jsonArray = JSON.parse(jsonArray)[stockCode];
    jsonArray = jsonArray.map(json =>({
        reitId: reitId[0][0].reitId,
        ...json
      }));

    await queryInterface.bulkInsert('SharePrice', jsonArray, {});
  }, []);
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('SharePrice', null, {});
}


