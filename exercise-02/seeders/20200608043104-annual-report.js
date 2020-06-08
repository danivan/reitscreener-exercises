import fs from 'fs';
import csvtojson from 'csvtojson';
import path from 'path';

export async function up (queryInterface, Sequelize) {
  const pathToDir = path.join(__dirname, '../../seed-02/');

  fs.readdir(pathToDir, (err, fileArray) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    } 

    let finalArray = fileArray.reduce( (finalArray, file, index, []) => {
      let jsonArray = csvtojson().fromFile(pathToDir + file);
console.log(jsonArray);
      jsonArray = jsonArray.map( (json) => {
        json.stockCode = file;
      });

      return finalArray.concat(jsonArray);
    });
    console.log(JSON.stringify(jsonArray));
    return queryInterface.bulkInsert('AnnualReport', jsonArray, {});
  });
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('AnnualReport', null, {});
}
