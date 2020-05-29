DROP FUNCTION IF EXISTS "calculateSharePriceNAV" CASCADE;

CREATE OR REPLACE FUNCTION "calculateSharePriceNAV"()
  RETURNS trigger AS
$BODY$
DECLARE
	"auditedNAVPerUnit" FLOAT;
BEGIN
	IF NEW.close = 0 THEN
		RETURN NEW;
	END IF;

    SELECT ar."auditedNAVPerUnit" INTO "auditedNAVPerUnit" FROM "AnnualReport" AS ar
	WHERE ar."reitId" = NEW."reitId" ORDER BY ar."announcementDate" DESC LIMIT 1;

	INSERT INTO "SharePriceNAV"("reitId",date,"pricePerNAVPerUnit")
	VALUES(NEW."reitId", NEW.date, NEW.close / "auditedNAVPerUnit");

	RETURN NEW;
END;
$BODY$
LANGUAGE PLPGSQL;

DROP FUNCTION IF EXISTS "calculateSharePriceYield" CASCADE;

CREATE OR REPLACE FUNCTION "calculateSharePriceYield"()
  RETURNS trigger AS
$BODY$
DECLARE
	"declaredDPU" FLOAT;
BEGIN
	IF NEW.close = 0 THEN
		RETURN NEW;
	END IF;

    SELECT ar."declaredDPU" INTO "declaredDPU" FROM "AnnualReport" AS ar
	WHERE ar."reitId" = NEW."reitId" ORDER BY ar."announcementDate" DESC LIMIT 1;

	INSERT INTO "SharePriceYield"("reitId",date,yield)
	VALUES(NEW."reitId", NEW.date, "declaredDPU" / NEW.close);

	RETURN NEW;
END;
$BODY$
LANGUAGE PLPGSQL;
