import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const QuarterReportModel = sequelize.define('QuarterReport', {
  reitId: DataTypes.INTEGER,
  frequency: DataTypes.STRING,
  period: DataTypes.STRING,
  year: DataTypes.INTEGER,
  financialYear: DataTypes.INTEGER,
  reportingPeriod: DataTypes.STRING,
  asAtDate: DataTypes.DATE,
  announcementDate: DataTypes.DATE,
  exDividendDate: DataTypes.DATE,
  audited: DataTypes.BOOLEAN,
  currency: DataTypes.STRING,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT,
  link: DataTypes.STRING,
  financialStatement: DataTypes.STRING,
  pressRelease: DataTypes.STRING,
}, { tableName: 'QuarterReport', timestamps: false });

QuarterReportModel.removeAttribute('id');

export default QuarterReportModel;
