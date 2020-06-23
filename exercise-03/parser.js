import data from './scraper';

function getHyperLink(string) {
  return string.substring(12, string.length - 12);
}

function getFY(string) {
  return string.substring(string.length - 9, string.length - 2);
}

function getQuarterReportingPeriod(string) {
  string = string.replace(/ /g, '');
  return string.substring(string.length - 11, string.length - 2);
}

function getQuarterHyperlink(string) {
  string = string.replace(/ /g, '');
  return string.substring(12, string.length - 14);
}

function getJsDateFromExcel(excelDate) {
  return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
}

export async function parseAnnual() {
  let values = [];
  await data.scraper('Annual')
    .then(async (dataValues) => {
      const flatDataValues = dataValues.flat();
      values = await Promise.all(flatDataValues.map((row) => ({
        stockCode: row[1],
        frequency: row[10],
        year: row[4],
        announcementDate: getJsDateFromExcel(row[8]),
        financialYear: row[5],
        reportingPeriod: getFY(row[6]),
        asAtDate: getJsDateFromExcel(row[7]),
        exDividendDate: getJsDateFromExcel(row[9]),
        audited: (row[11] === 'Yes'),
        currency: row[12],
        unitsBasic: row[13],
        unitsDiluted: row[14],
        revenue: row[15],
        propertyExpenses: row[16],
        netPropertyIncome: row[15] - row[16],
        incomeSupport: row[18],
        financeCost: row[19],
        managementFee: row[20],
        trusteeFee: row[21],
        resultsFromAssociattes: row[22],
        resultFromJVs: row[23],
        auditedNAVPerUnit: row[68],
        declaredDPU: row[67],
        link: getHyperLink(row[6]),
      })));
    });
  return values;
}

export async function parseQuarterly() {
  let values = [];
  await data.scraper('Quarterly')
    .then(async (dataValues) => {
      const flatDataValues = dataValues.flat();
      values = await Promise.all(flatDataValues.map((row) => ({
        stockCode: row[1],
        frequency: 'Quarter',
        year: row[4],
        announcementDate: getJsDateFromExcel(row[8]),
        financialYear: row[5],
        reportingPeriod: getQuarterReportingPeriod(row[6]),
        asAtDate: getJsDateFromExcel(row[7]),
        exDividendDate: getJsDateFromExcel(row[9]),
        audited: (row[11] === 'Yes'),
        currency: row[12],
        auditedNAVPerUnit: row[14],
        declaredDPU: row[13],
        link: getQuarterHyperlink(row[6]),
        financialStatement: row[16],
        pressRelease: row[17],
      })));
    });
  return values;
}
