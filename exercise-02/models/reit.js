'use strict';
module.exports = (sequelize, DataTypes) => {
  const REIT = sequelize.define('REIT', {
    name: DataTypes.STRING,
    stockCode: DataTypes.STRING
  }, {});
  REIT.associate = function(models) {
    REIT.hasMany(models.AnnualReport);
    REIT.hasMany(models.QuarterReport);
    REIT.hasMany(models.SharePrice);
    REIT.hasMany(models.SharePriceNAV);
    REIT.hasMany(models.SharePriceYield);
  };
  return REIT;
};