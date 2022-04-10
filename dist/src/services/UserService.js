"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("../entity/Employee");
const ResponseDTO_1 = __importDefault(require("../DTO/ResponseDTO"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Response_1 = __importDefault(require("../repository/Response"));
class UserService {
    constructor() {
        this.responseObject = new Response_1.default();
        /*
        Login User
        */
        this.loginUser = async (req) => {
            let responseObject = new ResponseDTO_1.default();
            const employeeDetails = await this.responseObject.find(Employee_1.Employee, { emailid: req.body.emailid });
            if (employeeDetails !== undefined) {
                let passwordVerify = await bcrypt_1.default.compare(req.body.password, employeeDetails.password);
                if (passwordVerify === true) {
                    req.session.isAuth = true;
                    req.session.user = employeeDetails;
                    responseObject.data = employeeDetails;
                    responseObject.message = "Login Sucessful";
                    responseObject.code = 200;
                    return responseObject;
                }
                else {
                    responseObject.data = {};
                    responseObject.message = "Wrong password";
                    responseObject.code = 403;
                    return responseObject;
                }
            }
            else {
                responseObject.data = {};
                responseObject.message = "emailid not found, Contact your admin!!";
                responseObject.code = 403;
                return responseObject;
            }
        };
        /*
        Logout User
        */
        this.logoutUser = async (req) => {
            await req.session.destroy();
            let responseObject = new ResponseDTO_1.default();
            responseObject.data = {};
            responseObject.message = "Logout Sucess";
            responseObject.code = 200;
            return responseObject;
        };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map