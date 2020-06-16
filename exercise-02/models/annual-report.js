import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const AnnualReportModel = sequelize.define('AnnualReport', {
  reitId: DataTypes.INTEGER,
  frequency: DataTypes.STRING,
  year: DataTypes.INTEGER,
  announcementDate: DataTypes.DATE,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT,
  link: DataTypes.STRING,
}, { tableName: 'AnnualReport', timestamps: false });

AnnualReportModel.removeAttribute('id');

export default AnnualReportModel;
