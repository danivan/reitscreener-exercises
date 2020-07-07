import parseProbutterfly from '../probutterfly/parser';
import parseSGInvestors from '../sginvestors/parser';
import parseReitsWeek from '../reitsweek/parser';

export async function up(queryInterface: any) {
  const proButterflyInsights = await parseProbutterfly();
  const sgInvestorsInsights = await parseSGInvestors();
  const reitsWeekInsights = await parseReitsWeek();

  let jsonArray = [...proButterflyInsights, ...sgInvestorsInsights, ...reitsWeekInsights];

  await queryInterface.bulkInsert('Insight', jsonArray, {});

}

export async function down(queryInterface: any) {
  await queryInterface.bulkDelete('Insight', null, {});
}
