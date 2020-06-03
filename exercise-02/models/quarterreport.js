'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuarterReport = sequelize.define('QuarterReport', {
    reitId: DataTypes.INTEGER,
    period: DataTypes.STRING,
    year: DataTypes.INTEGER,
    announcementDate: DataTypes.DATE,
    auditedNAVPerUnit: DataTypes.FLOAT,
    declaredDPU: DataTypes.FLOAT,
    link: DataTypes.STRING
  }, {});
  QuarterReport.associate = function(models) {
    QuarterReport.hasOne(models.REIT);
  };
  return QuarterReport;
};