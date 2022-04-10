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
const typeorm_1 = require("typeorm");
const logger_1 = __importDefault(require("../config/logger"));
class EmployeeResponse {
    constructor() {
        this.findEmployee = (entity, emailObject) => __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, typeorm_1.createConnection)()
                    .then((connection) => __awaiter(this, void 0, void 0, function* () {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = yield userRepository.findOne(emailObject);
                    yield connection.close();
                    return employeeDetails;
                }));
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        });
        this.saveEmployee = (entity, Object) => __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, typeorm_1.createConnection)()
                    .then((connection) => __awaiter(this, void 0, void 0, function* () {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let data = yield userRepository.save(Object);
                    yield connection.close();
                    return data;
                }));
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        });
        this.findAllEmployee = (entity) => __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, typeorm_1.createConnection)()
                    .then((connection) => __awaiter(this, void 0, void 0, function* () {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = yield userRepository.find();
                    yield connection.close();
                    return employeeDetails;
                }));
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        });
        this.deleteEmployee = (entity, object) => __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, typeorm_1.createConnection)()
                    .then((connection) => __awaiter(this, void 0, void 0, function* () {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = yield userRepository.delete(object);
                    yield connection.close();
                    return employeeDetails;
                }));
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        });
        this.updateEmployee = (entity, empIdobject, updateObject) => __awaiter(this, void 0, void 0, function* () {
            try {
                return (0, typeorm_1.createConnection)()
                    .then((connection) => __awaiter(this, void 0, void 0, function* () {
                    const userRepository = (0, typeorm_1.getRepository)(entity);
                    let employeeDetails = yield userRepository.update(empIdobject, updateObject);
                    yield connection.close();
                    return employeeDetails;
                }));
            }
            catch (error) {
                logger_1.default.logger.error(error);
            }
        });
    }
}
exports.default = EmployeeResponse;
