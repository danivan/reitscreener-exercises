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
const index_1 = __importDefault(require("../models/index"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const reits = yield index_1.default.models.Reit.findAll({
        attributes: ['reitId', 'stockCode'],
        where: {
            exchange: 'SGX'
        },
        raw: true
    });
    const reitWithLinks = reits.map((reit) => {
        reit.stockCode = reit.stockCode.substring(0, 4);
        if (reit.stockCode === 'A17U') {
            reit.link = 'https://sginvestors.io/sgx/reit/a17u-ascendas-reit/';
        }
        if (reit.stockCode === 'N2IU') {
            reit.link = 'https://sginvestors.io/sgx/reit/n2iu-mapletree-com-tr/';
        }
        if (reit.stockCode === 'M1GU') {
            reit.link = 'https://sginvestors.io/sgx/reit/m1gu-sabana-reit/';
        }
        return reit;
    });
    const x = x_ray_1.default();
    const xRayResponseNews = yield Promise.all(reitWithLinks.map(((reit) => __awaiter(void 0, void 0, void 0, function* () {
        const xRayResponse = yield x(encodeURI(`${reit.link}news-article`), 'div.stocknewslist article', [{
                title: 'a div.title',
                publishDate: 'a div.publisheddate',
                author: 'a div.author',
                description: 'a div.description',
                descriptionHtml: 'a div.description@html',
                link: 'a@href'
            }]);
        const responseWithContent = yield Promise.all(xRayResponse.map((response) => __awaiter(void 0, void 0, void 0, function* () {
            response.internal = yield x(encodeURI(response.link), {
                content: '.article@html',
                image: '.article img@src'
            });
            response.reitId = reit.reitId;
            response.type = 'news';
            return response;
        })));
        return responseWithContent;
    }))));
    const xRayResponseBlog = yield Promise.all(reitWithLinks.map(((reit) => __awaiter(void 0, void 0, void 0, function* () {
        const xRayResponse = yield x(encodeURI(`${reit.link}blog-article`), 'div.bloggerssaylist article', [{
                title: 'a div.title',
                publishDate: 'a div.updatedsgtime',
                author: 'a div.authorname',
                description: 'a div.description',
                descriptionHtml: 'a div.description@html',
                link: 'a@href'
            }]);
        const responseWithContent = yield Promise.all(xRayResponse.map((response) => __awaiter(void 0, void 0, void 0, function* () {
            response.internal = yield x(encodeURI(response.link), {
                content: '.post, .content@html',
                image: 'main, #main, .main img@src'
            });
            response.reitId = reit.reitId;
            response.type = 'blog';
            return response;
        })));
        return responseWithContent;
    }))));
    return [...xRayResponseNews, ...xRayResponseBlog];
});
