import sequelize from '../../node_modules/sequelize';

const SharePriceYield = sequelize.define('SharePriceYield', {
  reitId: DataTypes.INTEGER,
  date: DataTypes.DATE,
  yield: DataTypes.FLOAT
}, {tableName: 'SharePriceYield', timestamps: false});

SharePriceYield.removeAttribute('id');

export default SharePriceYield;
