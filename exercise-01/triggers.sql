CREATE TRIGGER "calculateSharePriceNAVTrigger" AFTER INSERT OR UPDATE ON "SharePrice"
FOR EACH ROW EXECUTE PROCEDURE "calculateSharePriceNAV"();

CREATE TRIGGER "calculateSharePriceYieldTrigger" AFTER INSERT OR UPDATE ON "SharePrice"
FOR EACH ROW EXECUTE PROCEDURE "calculateSharePriceYield"();
