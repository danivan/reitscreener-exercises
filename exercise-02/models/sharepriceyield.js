'use strict';
module.exports = (sequelize, DataTypes) => {
  const SharePriceYield = sequelize.define('SharePriceYield', {
    reitId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    yield: DataTypes.FLOAT
  }, {});
  SharePriceYield.associate = function(models) {
    SharePriceYield.hasOne(models.REIT);
  };
  return SharePriceYield;
};