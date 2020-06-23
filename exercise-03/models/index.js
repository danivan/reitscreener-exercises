/* eslint-disable no-new */
import sequelize from '../lib/sequelize';

import AnnualReport from './annual-report';
import QuarterReport from './quarter-report';

new AnnualReport(sequelize);
new QuarterReport(sequelize);

// eslint-disable-next-line prefer-destructuring
const models = sequelize.models;
Object.keys(models).forEach((name) => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

export default sequelize;
