'use strict';
module.exports = (sequelize, DataTypes) => {
  const SharePrice = sequelize.define('SharePrice', {
    reitId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    volume: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    open: DataTypes.FLOAT,
    close: DataTypes.FLOAT
  }, {});
  SharePrice.associate = function(models) {
    SharePrice.hasOne(models.REIT);
  };
  return SharePrice;
};