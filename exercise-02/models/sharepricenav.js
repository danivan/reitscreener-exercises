'use strict';
module.exports = (sequelize, DataTypes) => {
  const SharePriceNAV = sequelize.define('SharePriceNAV', {
    reitId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    pricePerNAVPerUnit: DataTypes.FLOAT
  }, {});
  SharePriceNAV.associate = function(models) {
    SharePriceNAV.hasOne(models.REIT);
  };
  return SharePriceNAV;
};