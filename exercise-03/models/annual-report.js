import DataTypes from 'sequelize/lib/data-types';
import sequelize from '../lib/sequelize';

const AnnualReportModel = sequelize.define('AnnualReport', {
  reitId: DataTypes.INTEGER,
  frequency: DataTypes.STRING,
  year: DataTypes.INTEGER,
  announcementDate: DataTypes.DATE,
  financialYear: DataTypes.STRING,
  reportingPeriod: DataTypes.STRING,
  asAtDate: DataTypes.DATE,
  exDividendDate: DataTypes.DATE,
  audited: DataTypes.BOOLEAN,
  currency: DataTypes.STRING,
  unitsBasic: DataTypes.FLOAT,
  unitsDiluted: DataTypes.FLOAT,
  revenue: DataTypes.FLOAT,
  propertyExpenses: DataTypes.FLOAT,
  netPropertyIncome: DataTypes.FLOAT,
  incomeSupport: DataTypes.FLOAT,
  financeCost: DataTypes.FLOAT,
  managementFee: DataTypes.FLOAT,
  trusteeFee: DataTypes.STRING,
  resultsFromAssociattes: DataTypes.STRING,
  resultFromJVs: DataTypes.STRING,
  auditedNAVPerUnit: DataTypes.FLOAT,
  declaredDPU: DataTypes.FLOAT,
  link: DataTypes.STRING,
}, { tableName: 'AnnualReport', timestamps: false });

AnnualReportModel.removeAttribute('id');

export default AnnualReportModel;
