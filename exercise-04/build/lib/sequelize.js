"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_json_1 = __importDefault(require("../config/config.json"));
exports.default = new sequelize_typescript_1.Sequelize(config_json_1.default.development.database, config_json_1.default.development.username, config_json_1.default.development.password, {
    dialect: config_json_1.default.development.dialect,
    logging: config_json_1.default.development.logging,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
});
