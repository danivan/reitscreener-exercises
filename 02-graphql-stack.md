# GraphQL Stack

This activity will be used to expose a couple of REIT related information through the GraphQL stack.

* Reit Information
* Financial Reports
* Share Price Charts
* Watchlist

## Objectives

* The code must be written in Javascript, must run on top of NodeJS (latest LTS version is recommended), and the stack must be runnable by `npm start`.
* FlowJS will be added for type checks, to ensure what data goes where.
* Linting must be done using ESLint and runnable by `npm lint`.
* Unit Testing must be done using AvaJS and runnable by `npm test`.
* Use of ES6 and above is encouraged.
* Auxiliary services such as PostgreSQL must be run in docker and docker definitions must be written using `dockerfile` and `docker-compose` file.

## GraphQL Schema

There is a defined GraphQL schema in the `schema.gql` file, you will use the same file to build your GraphQL API application.

### Enums

| Enum | Description |
|----|----|
| REITExchange | A facility where stock brokers and traders can buy and sell securities, such as shares of stock and bonds and other financial instruments, in this case REIT stocks |
| REITSector | A group of REITs shares the same or a related product or service |
| ReportFrequency | The REIT's reporting frequency |

### Types

| Type | Description |
|----|----|
| Reit | Real Estate Investment Trusts, are companies that own or finance income-producing real estate |
| FinancialReport | Written records that convey the business activities and the financial performance of a company |
| SharePriceChart | The share price indicator using NAV and Yields |
| Watchlist | A list of REITs to monitor |

### Query

| Query | Description |
|----|----|
| reit | Returns the reit information |
| reits | Returns all the reits on a particular exchange |
| financialReports | Returns the reports on a particular reit based on frequency |
| sharePriceNAV | Returns the chart datapoints for the NAV valuation |
| sharePriceYield | Returns the chart datapoints for the DPU valuation |
| watchlist | Returns the monitored REITs on a particular exchange |

### Mutations

| Mutation | Description |
|----|----|
| addToWatchlist | Adds a REIT to watchlist |
| removeFromWatchlist | Removes a REIT from the watchlist |

### Custom Scalar

| Mutation | Description |
|----|----|
| Duration | It should accept strings as defined by the [ms](https://www.npmjs.com/package/ms) package and throws an error if it doesn't follow the specifications |
| DateTime | It should accept valid date strings and throws an error otherwise |