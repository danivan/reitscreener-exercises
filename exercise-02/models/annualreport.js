'use strict';
module.exports = (sequelize, DataTypes) => {
  const AnnualReport = sequelize.define('AnnualReport', {
    reitId: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    announcementDate: DataTypes.DATE,
    auditedNAVPerUnit: DataTypes.FLOAT,
    declaredDPU: DataTypes.FLOAT
  }, {});
  AnnualReport.associate = function(models) {
    AnnualReport.hasOne(models.REIT);
  };
  return AnnualReport;
};