import sequelize from 'sequelize';

const AnnualReportModel = sequelize.define('AnnualReport', {
  reitId: DataTypes.INTEGER,
  year: DataTypes.INTEGER,
  announcementDate: DataTypes.DATE,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT
}, {tableName: 'AnnualReport', timestamps: false});

AnnualReportModel.removeAttribute('id');

export default AnnualReportModel;
