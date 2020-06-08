import csvtojson from 'csvtojson';
import path from 'path';

export async function up (queryInterface, Sequelize) {
  const pathToFile = path.join(__dirname, '../../seed-02/reit.csv');
  let jsonArray = await csvtojson().fromFile(pathToFile);
  // await queryInterface.bulkInsert('Reit', jsonArray, {});
}

export async function down (queryInterface, Sequelize) {
  console.log('test');
  await queryInterface.bulkDelete('Reit', null, {});
}
