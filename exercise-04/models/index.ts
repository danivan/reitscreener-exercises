/* eslint-disable no-new */
import sequelize from '../lib/sequelize';
import Reit from './reit';
import Insight from './insight';

sequelize.addModels([Reit, Insight]);
Reit.removeAttribute('id');
Insight.removeAttribute('id');

// eslint-disable-next-line prefer-destructuring
const models = sequelize.models;
Object.keys(models).forEach((name) => {
  if ('associate' in models[name]) {
    // @ts-ignore
    models[name].associate(models);
  }
});

export default sequelize;
