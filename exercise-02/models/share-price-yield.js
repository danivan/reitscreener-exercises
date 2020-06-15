import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const SharePriceYieldModel = sequelize.define('SharePriceYield', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  yield: DataTypes.FLOAT,
}, { tableName: 'SharePriceYield', timestamps: false });

SharePriceYieldModel.removeAttribute('id');

export default SharePriceYieldModel;
