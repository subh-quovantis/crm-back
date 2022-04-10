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
const employee_model_1 = require("../entity/employee.model");
const typeorm_2 = require("typeorm");
const employeeResponse_1 = __importDefault(require("../DTO/employeeResponse"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        /*
        Login User
        */
        this.loginUser = (req) => __awaiter(this, void 0, void 0, function* () {
            return (0, typeorm_2.createConnection)()
                .then((connection) => __awaiter(this, void 0, void 0, function* () {
                let responseObject = new employeeResponse_1.default();
                const userRepository = (0, typeorm_1.getRepository)(employee_model_1.Employee);
                let employeeDetails = yield userRepository.findOne({ emailid: req.body.emailid });
                yield connection.close();
                if (employeeDetails !== undefined) {
                    let passwordVerify = yield bcrypt_1.default.compare(req.body.password, employeeDetails.password);
                    if (passwordVerify === true) {
                        req.session.isAuth = true;
                        req.session.user = employeeDetails,
                            responseObject.data = employeeDetails,
                            responseObject.message = "Login Sucessful",
                            responseObject.code = 200;
                        return responseObject;
                    }
                    else {
                        req.session.user = employeeDetails,
                            responseObject.data = {},
                            responseObject.message = "Wrong password",
                            responseObject.code = 403;
                        return responseObject;
                    }
                }
                else {
                    req.session.user = employeeDetails,
                        responseObject.data = {},
                        responseObject.message = "emailid not found, Contact your admin!!",
                        responseObject.code = 403;
                    return responseObject;
                }
            }));
        });
        /*
        Logout User
        */
        this.logoutUser = (req) => __awaiter(this, void 0, void 0, function* () {
            yield req.session.destroy();
            let responseObject = new employeeResponse_1.default();
            responseObject.data = {},
                responseObject.message = "emailid not found, Contact your admin!!",
                responseObject.code = 403;
            return responseObject;
        });
    }
}
exports.default = UserService;
