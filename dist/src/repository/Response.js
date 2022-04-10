"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const logger_1 = __importDefault(require("../config/logger"));
const typeormconnection_1 = require("../utils/typeormconnection");
class Response {
    constructor() {
        this.find = async (entity, emailObject) => {
            try {
                return await (0, typeormconnection_1.typeOrmConnection)()
                    .then(async (connection) => {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = await userRepository.findOne(emailObject);
                    await connection.close();
                    return employeeDetails;
                });
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        };
        this.save = async (entity, Object) => {
            try {
                return await (0, typeormconnection_1.typeOrmConnection)()
                    .then(async (connection) => {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let data = await userRepository.save(Object);
                    await connection.close();
                    return data;
                });
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        };
        this.findAll = async (entity) => {
            try {
                return await (0, typeormconnection_1.typeOrmConnection)()
                    .then(async (connection) => {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = await userRepository.find();
                    await connection.close();
                    return employeeDetails;
                });
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        };
        this.delete = async (entity, object) => {
            try {
                return await (0, typeormconnection_1.typeOrmConnection)()
                    .then(async (connection) => {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = await userRepository.delete(object);
                    await connection.close();
                    return employeeDetails;
                });
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        };
        this.update = async (entity, empIdobject, updateObject) => {
            try {
                return await (0, typeormconnection_1.typeOrmConnection)()
                    .then(async (connection) => {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = await userRepository.update(empIdobject, updateObject);
                    await connection.close();
                    return employeeDetails;
                });
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        };
    }
}
exports.default = Response;
//# sourceMappingURL=Response.js.map