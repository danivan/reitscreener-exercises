import csvtojson from 'csvtojson';
import path from 'path';

export async function up (queryInterface, Sequelize) {
  const pathToFile = path.join(__dirname, '../../seed-02/reit.csv');
  const jsonArray = await csvtojson().fromFile(pathToFile);
  await queryInterface.bulkInsert('Reit', jsonArray, {});
}

export async function down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Reit', null, {});
}
