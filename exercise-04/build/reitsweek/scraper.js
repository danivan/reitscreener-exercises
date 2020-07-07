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
const x_ray_1 = __importDefault(require("x-ray"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const x = x_ray_1.default();
    let xrayresponse = yield x('https://www.reitsweek.com/category/global-reits-news/australia-reits', 'div.column.half', [{
            title: 'article h2',
            publishDate: 'article div time',
            description: 'article div.excerpt',
            image: 'article a img@src',
            link: 'article h2 a@href',
            internal: x('article h2 a@href', {
                author: 'article header div.post-meta span span.reviewer',
                content: 'div.main-content article@html',
            })
        }])
        .paginate('a.next@href');
    return xrayresponse;
});
