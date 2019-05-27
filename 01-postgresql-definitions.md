# Share Price Charts

This activity outlines a couple of key points that you need to get yourself familiar.

* table definitions
* stored procedures
* trigger definitions

## Schema

REIT table definition, a REIT is a company that owns, and in most cases operates, income-producing real estate.

|name | description |
|---|---|
| reitId | unique REIT id |
| name | REIT name |
| stockCode | REIT stock code, given by the market exchange |

REIT annual report table definition, this is the REIT's annual performance

| name | description |
|---|---|
| reitId | unique REIT id |
| annualReportId | unique REIT annual report id |
| year | report year |
| announcementDate | report announcement date |
| auditedNAVPerUnit | calculated NAV per unit basis |
| declaredDPU | audited annual DPU |

REIT Share Price, daily stock market price

| name | description |
|---|---|
| reitId | unique REIT id |
| date | share price date |
| volume | traded asset of the day |
| high | highest share price of the day |
| low | lowest share price of the day |
| open | opening share price of the day |
| close | closing share price of the day |

REIT Share Price NAV, used to determine if share price valuation is good/bad to buy based on NAV

| name | description |
|---|---|
| reitId | unique REIT id |
| date | share price date |
| pricePerNAVPerUnit | share price NAV |

REIT Share Price Yield, used to determine if share price valuation is good/bad to buy based on DPU

| name | description |
|---|---|
| reitId | unique REIT id |
| date | share price date |
| yield | share price yield |

## Calculations

### Share Price NAV

Calculation is done per share price date using `calculateSharePriceNAV` function.
Pick the latest `auditedNAVPerUnit` value that has an announcement date that is less than or equal to the share price's date, do the calculation, and insert it into the `SharePriceNAV` table;

* `pricePerNAVPerUnit = closing share price / audited NAV Per Unit`

### Share Price Yield

* `yield = declared dpu / closing share price`

Calculation is done per share price date using `calculateSharePriceYield` function.
Pick the latest `declaredDPU` value that has an announcement date that is less than or equal to the share price's date, do the calculation, and insert it into the `SharePriceYield` table;

## Triggers

Design the triggers that it automatically calls the share price functions when a share price is added or updated.

There will be two triggers in place

* `calculateSharePriceNAVTrigger`, performs `calculateSharePriceNAV` when a new share price is added
* `calculateSharePriceYieldTrigger`, performs `calculateSharePriceYield` when a new share price is added