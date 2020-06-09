import fs from 'fs';
import csvtojson from 'csvtojson';
import path from 'path';

export async function up (queryInterface, Sequelize) {
  const pathDir = path.join(__dirname, '../../seed-02/annual-reports');
  
  fs.readdir(pathDir, async (err, fileArray) => {
    if (err) {
      console.log(err);
    }
    const finalArray = await fileArray.reduce( async (finalArray, file2) => {
      const pathToFile = path.join(__dirname, file2);
      let jsonArray = await csvtojson()
      .fromFile(pathToFile)
      .then( jsonArray => {
        jsonArray.map(
          ({
            reitId: 1,
            ...json,
         })
        );
      })
      .catch( rejected => {
        console.log(rejected);
      });
      return finalArray.concat(jsonArray);
    }, []);
    console.log(finalArray);
    await queryInterface.bulkInsert('AnnualReport', finalArray, {});
  });
}

async function getJsonArray(pathToFile) {
  return await csvtojson().fromFile(pathToFile);
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('AnnualReport', null, {});
}
