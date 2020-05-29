CREATE OR REPLACE FUNCTION calculateSharePriceNAV()
  RETURNS trigger AS
$BODY$
DECLARE
	auditedNAVPerUnit FLOAT := SELECT "auditedNAVPerUnit" FROM "AnnualReport" ORDER BY "announcementDate" DESC LIMIT 1
BEGIN
	INSERT INTO "SharePriceNav"(reitId,date,pricePerNAVPerUnit)
	VALUES(OLD.reitId, CURRENT_DATE, NEW.close / auditedNAVPerUnit);

	RETURN NEW;
END;
$BODY$

CREATE OR REPLACE FUNCTION calculateSharePriceYield()
  RETURNS trigger AS
$BODY$
DECLARE
	declaredDPU FLOAT := SELECT "declaredDPU" FROM "AnnualReport" ORDER BY "announcementDate" DESC LIMIT 1;
BEGIN
	INSERT INTO "SharePriceYield"(reitId,date,yield)
	VALUES(OLD.reitId, CURRENT_DATE, declaredDPU / NEW.close);

	RETURN NEW;
END;
$BODY$
