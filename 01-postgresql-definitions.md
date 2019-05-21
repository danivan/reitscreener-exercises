# Share Price Charts

This activity outlines a couple of key points that you need to get yourself familiar.

* table definitions
* stored procedures
* trigger definitions

## Schema

* REIT table definition, a REIT is a is a company that owns, and in most cases operates, income-producing real estate.

|name | description |
|---|---|
| reitId | unique REIT id |
| name | REIT name |
| stockCode | REIT stock code, given by the market exchange |

* REIT annual report table definition, this is the REIT's annual performance

| name | description |
|---|---|
| reitId | unique REIT id |
| annualReportId | unique REIT annual report id |
| year | report year |
| announcementDate | report announcement date |
| auditedNAVPerUnit | calculated NAV per unit basis |
| declaredDPU | |

* REIT Share Price, daily stock market price

| name | description |
|---|---|
| reitId | unique REIT id |
| date | share price date |
| volume | traded asset of the day |
| high | highest share price of the day |
| low | lowest share price of the day |
| open | opening share price of the day |
| close | closing share price of the day |

* REIT Share Price NAV, used to determine if share price valuation is good/bad to buy based on NAV

| name | description |
|---|---|
| reitId | unique REIT id |
| date | share price date |
| pricePerNAVPerUnit | share price NAV |

* REIT Share Price Yield, used to determine if share price valuation is good/bad to buy based on DPU

| name | description |
|---|---|
| reitId | unique REIT id |
| date | share price date |
| yield | share price yield |

## Calculations

### Share Price NAV

Calculation is done per share price date using `calculateSharePriceNAV` function.
Pick the `auditedNAVPerUnit` value that has an announcement date that is less than or equal to the share price's date.

* `pricePerNAVPerUnit = closing share price / audited NAV Per Unit`

### Share Price Yield

* `yield = declared dpu / closing share price`

Calculation is done per share price date using `calculateSharePriceYield` function.
Pick the `declaredDPU` value that has an announcement date that is less than or equal to the share price's date.

## Triggers

Design the triggers that it automatically inserts the calculated `pricePerNAVPerUnit` and `yield` values on respective tables.

There will be two triggers in place

* `calculateSharePriceNAVTrigger`, inserts to share price nav table when a new share price is added
* `calculateSharePriceYieldTrigger`, inserts to share price yield table when a new share price is added