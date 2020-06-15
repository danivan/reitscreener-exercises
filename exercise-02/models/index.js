import sequelize from '../lib/sequelize';

import Reit from './reit';
import AnnualReport from './annual-report';
import QuarterReport from './quarter-report';
import SharePrice from './share-price';
import SharePriceNAV from './share-price-nav';
import SharePriceYield from './share-price-yield';

Reit(sequelize);
AnnualReport(sequelize);
QuarterReport(sequelize);
SharePrice(sequelize);
SharePriceNAV(sequelize);
SharePriceYield(sequelize);

// eslint-disable-next-line prefer-destructuring
const models = sequelize.models;
Object.keys(models).forEach((name) => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

export default sequelize;
