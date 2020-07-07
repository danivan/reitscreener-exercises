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
exports.down = exports.up = void 0;
const parser_1 = __importDefault(require("../probutterfly/parser"));
const parser_2 = __importDefault(require("../sginvestors/parser"));
const parser_3 = __importDefault(require("../reitsweek/parser"));
function up(queryInterface) {
    return __awaiter(this, void 0, void 0, function* () {
        const proButterflyInsights = yield parser_1.default();
        const sgInvestorsInsights = yield parser_2.default();
        const reitsWeekInsights = yield parser_3.default();
        let jsonArray = [...proButterflyInsights, ...sgInvestorsInsights, ...reitsWeekInsights];
        yield queryInterface.bulkInsert('Insight', jsonArray, {});
    });
}
exports.up = up;
function down(queryInterface) {
    return __awaiter(this, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('Insight', null, {});
    });
}
exports.down = down;
