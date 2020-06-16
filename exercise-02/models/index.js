/* eslint-disable no-new */
import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

import Reit from './reit';
import AnnualReport from './annual-report';
import QuarterReport from './quarter-report';
import SharePrice from './share-price';
import SharePriceNAV from './share-price-nav';
import SharePriceYield from './share-price-yield';

const Watchlist = sequelize.define('Watchlist', {
  stockCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  exchange: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { tableName: 'Watchlist', timestamps: false });

Watchlist.removeAttribute('id');

sequelize.sync();

new Reit(sequelize);
new AnnualReport(sequelize);
new QuarterReport(sequelize);
new SharePrice(sequelize);
new SharePriceNAV(sequelize);
new SharePriceYield(sequelize);

// eslint-disable-next-line prefer-destructuring
const models = sequelize.models;
Object.keys(models).forEach((name) => {
  if ('associate' in models[name]) {
    models[name].associate(models);
  }
});

export default sequelize;
