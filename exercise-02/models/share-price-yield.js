import sequelize from 'sequelize';

const SharePriceYieldModel = sequelize.define('SharePriceYield', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  yield: DataTypes.FLOAT
}, {tableName: 'SharePriceYield', timestamps: false});

SharePriceYieldModel.removeAttribute('id');

export default SharePriceYieldModel;
