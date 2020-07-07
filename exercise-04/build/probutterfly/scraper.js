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
    let xrayresponse = yield x('https://www.probutterfly.com/blog', '.panel', [{
            title: 'div.panel__body h2.blog__title',
            publishDate: 'div.panel__body div.blog__info span.blog__date',
            author: 'div.panel__body div.blog__conent p:first-child',
            description: 'div.panel__body div.blog__conent',
            internal: x('div.panel__body h2.blog__title a@href', {
                content: 'div.panel:nth-child(1) > div:nth-child(1)@html',
                image: 'div.panel.blog div.panel__body img@src',
            })
        }])
        .paginate('div.pag div.pag__cell--next a@href');
    return xrayresponse;
});
