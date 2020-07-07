"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-new */
const sequelize_1 = __importDefault(require("../lib/sequelize"));
const reit_1 = __importDefault(require("./reit"));
const insight_1 = __importDefault(require("./insight"));
sequelize_1.default.addModels([reit_1.default, insight_1.default]);
// eslint-disable-next-line prefer-destructuring
const models = sequelize_1.default.models;
Object.keys(models).forEach((name) => {
    if ('associate' in models[name]) {
        // @ts-ignore
        models[name].associate(models);
    }
});
exports.default = sequelize_1.default;
