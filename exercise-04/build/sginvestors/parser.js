"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const scraper_1 = __importDefault(require("./scraper"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield scraper_1.default();
    const insights = data.flat();
    return insights.reduce((insights, insight) => {
        if (insight.internal.content === null) {
            insight.internal.content = insight.descriptionHtml;
        }
        delete insight.descriptionHtml;
        if (insight.internal.image === undefined)
            insight.internal.image = '';
        insight.image = insight.internal.image;
        insight.content = insight.internal.content;
        delete insight.internal;
        return [...insights, insight];
    }, []);
});
