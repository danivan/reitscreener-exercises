import parseProbutterfly from '../probutterfly/parser';
import parseSGInvestors from '../sginvestors/parser';
import parseReitsWeek from '../reitsweek/parser';
import sequelize from '../models/index';

(async () => {
  const proButterflyInsights = await parseProbutterfly();
  const sgInvestorsInsights = await parseSGInvestors();
  const reitsWeekInsights = await parseReitsWeek();

  let jsonArray = [...proButterflyInsights, ...sgInvestorsInsights, ...reitsWeekInsights];

  sequelize.models.Insight.bulkCreate(jsonArray)
    .then((res) => {
      console.log("Seed successful!");
    })
    .catch((err) => {
      console.log(err);
    });
  
})()
