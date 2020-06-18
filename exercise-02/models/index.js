/* eslint-disable no-new */
import sequelize from '../lib/sequelize';

import Reit from './reit';
import AnnualReport from './annual-report';
import QuarterReport from './quarter-report';
import SharePrice from './share-price';
import SharePriceNAV from './share-price-nav';
import SharePriceYield from './share-price-yield';
import Watchlist from './watchlist';

new Reit(sequelize);
new AnnualReport(sequelize);
new QuarterReport(sequelize);
new SharePrice(sequelize);
new SharePriceNAV(sequelize);
new SharePriceYield(sequelize);
new Watchlist(sequelize);

// eslint-disable-next-line prefer-destructuring
const models = sequelize.models;
Object.keys(models).forEach((name) => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

export default sequelize;
