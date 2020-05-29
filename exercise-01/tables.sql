CREATE DATABASE reitscreenerexercise;

\c reitscreenerexercise;

CREATE TABLE IF NOT EXISTS "REIT" (
	"reitId" SERIAL PRIMARY KEY,
	"name" VARCHAR (50) UNIQUE NOT NULL,
	"stockCode" VARCHAR (50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "AnnualReport" (
	"reitId" INT UNIQUE NOT NULL,
	"annualReportId" SERIAL PRIMARY KEY,
	"year" VARCHAR (50) NOT NULL,
	"announcementDate" DATE NOT NULL,
	"auditedNAVPerUnit" FLOAT NOT NULL,
	"declaredDPU" FLOAT NOT NULL,
	CONSTRAINT "annualReport_reitId_fkey" FOREIGN KEY ("reitId")
      REFERENCES "REIT" ("reitId") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "SharePrice" (
	"reitId" INT NOT NULL,
	"date" DATE NOT NULL,
	"volume" FLOAT NOT NULL,
	"high" FLOAT NOT NULL,
	"low" FLOAT NOT NULL,
	"open" FLOAT NOT NULL,
	"close" FLOAT NOT NULL,
	CONSTRAINT "sharePrice_reitId_fkey" FOREIGN KEY ("reitId")
      REFERENCES "REIT" ("reitId") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "SharePriceNAV" (
	"reitId" INT NOT NULL,
	"date" DATE NOT NULL,
	"pricePerNAVPerUnit" FLOAT NOT NULL,
	CONSTRAINT "sharePriceNAV_reitId_fkey" FOREIGN KEY ("reitId")
      REFERENCES "REIT" ("reitId") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "SharePriceYield" (
	"reitId" INT NOT NULL,
	"date" DATE NOT NULL,
	"yield" FLOAT NOT NULL,
	CONSTRAINT "sharePriceYield_reitId_fkey" FOREIGN KEY ("reitId")
      REFERENCES "REIT" ("reitId") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);
