import csvtojson from 'csvtojson';
import path from 'path';

export async function up(queryInterface) {
  const pathToFile = path.join(__dirname, '../../seed-02/reit.csv');
  const jsonArray = await csvtojson().fromFile(pathToFile);
  await queryInterface.bulkInsert('Reit', jsonArray, {});
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete('Reit', null, {});
}
