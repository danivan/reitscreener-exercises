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
const ramda_1 = __importDefault(require("ramda"));
const scraper_1 = __importDefault(require("./scraper"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield scraper_1.default();
    const notNull = (f) => f.internal.content !== null;
    const filtered = ramda_1.default.filter(notNull, data);
    console.log(filtered);
    return filtered.reduce((articles, article) => {
        if (article.author && article.author.substring(0, 3) !== 'by:') {
            return articles;
        }
        article.type = 'blog';
        article.author = article.author && article.author.replace('by: ', '');
        article.image = article.internal.image;
        article.content = article.internal.content;
        delete article.internal;
        return [...articles, article];
    }, []);
});
