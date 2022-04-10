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
const employee_model_1 = require("../entity/employee.model");
const employeeResponse_1 = __importDefault(require("../DTO/employeeResponse"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Employee_response_1 = __importDefault(require("../response/Employee.response"));
class EmployeeService {
    constructor() {
        this.responseObject = new Employee_response_1.default();
        /*
        add employees
        */
        this.addEmployee = (req) => __awaiter(this, void 0, void 0, function* () {
            let emp = new employee_model_1.Employee();
            let responseDTO = new employeeResponse_1.default();
            let employeeDetails = yield this.responseObject.findEmployee(employee_model_1.Employee, { emailid: req.emailid });
            if (employeeDetails) {
                responseDTO.data = {};
                responseDTO.message = "Email id ALready registered";
                responseDTO.code = 400;
                return responseDTO;
            }
            else if (employeeDetails == undefined) {
                const passwordHash = yield bcrypt_1.default.hash(req.password, 9);
                emp = Object.assign({}, req);
                let data = this.responseObject.saveEmployee(employee_model_1.Employee, emp);
                responseDTO.data = data;
                responseDTO.message = "Employee Added sucessfully";
                responseDTO.code = 201;
                return responseDTO;
            }
        });
        /*
        get ALL Employees
        */
        this.getAllEmployee = (req) => __awaiter(this, void 0, void 0, function* () {
            let responseDTO = new employeeResponse_1.default();
            let employeeDetails = yield this.responseObject.findAllEmployee(employee_model_1.Employee);
            responseDTO.data = employeeDetails;
            responseDTO.message = "Employee details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        });
        /*
        delete Employees
        */
        this.deleteEmployee = (req) => __awaiter(this, void 0, void 0, function* () {
            let responseDTO = new employeeResponse_1.default();
            let employeeDetails = yield this.responseObject.findEmployee(employee_model_1.Employee, { emp_id: req.emp_id });
            if (employeeDetails) {
                yield this.responseObject.deleteEmployee(employee_model_1.Employee, { emp_id: req.emp_id });
                responseDTO.data = {};
                responseDTO.message = "Employee deleted sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "Employee id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        });
        /*
        set isDelete to true
        */
        this.setIsDeleted = (req) => __awaiter(this, void 0, void 0, function* () {
            let responseDTO = new employeeResponse_1.default();
            let employeeDetails = yield this.responseObject.findEmployee(employee_model_1.Employee, { emp_id: req.emp_id });
            if (employeeDetails) {
                yield this.responseObject.updateEmployee(employee_model_1.Employee, { emp_id: req.emp_id }, { isDeleted: true });
                responseDTO.data = {};
                responseDTO.message = "Set isDelete to true sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "Employee id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        });
        /*
        update Employees
        */
        this.updateEmployee = (req) => __awaiter(this, void 0, void 0, function* () {
            // return new Promise((resolve, reject) => {
            //   createConnection()
            //     .then(async (connection) => {
            // const userRepository = getRepository(Employee);
            let employeeDetails = yield this.responseObject.findEmployee(employee_model_1.Employee, { emp_id: req.emp_id });
            let responseDTO = new employeeResponse_1.default();
            // console.log(employeeDetails,"dataaaa")
            if (employeeDetails) {
                // await this.responseObject.updateEmployee(Employee,{ emp_id: req.emp_id },
                //   {
                //     fullname: req.fullname ? req.fullname : employeeDetails.fullname,
                //     emailid: req.emailid ? req.emailid : employeeDetails.emailid,
                //     phone_number: req.phone_number ? req.phone_number : employeeDetails.phone_number,
                //     gender: req.gender ? req.gender : employeeDetails.gender,
                //     salary: req.salary ? req.salary : employeeDetails.salary,
                //     password: req.password ? req.password : employeeDetails.password,
                //     role_id: req.role_id ? req.role_id : employeeDetails.role_id,
                //     isActive: req.isActive ? req.isActive : employeeDetails.isActive,
                //     isDeleted: req.isDeleted ? req.isDeleted : employeeDetails.isDeleted,
                //     address: req.address ? req.address : employeeDetails.address
                //   })
                // await userRepository.update({ emp_id: req.emp_id },
                //   {
                //     fullname: req.fullname ? req.fullname : employeeDetails.fullname,
                //     emailid: req.emailid ? req.emailid : employeeDetails.emailid,
                //     phone_number: req.phone_number ? req.phone_number : employeeDetails.phone_number,
                //     gender: req.gender ? req.gender : employeeDetails.gender,
                //     salary: req.salary ? req.salary : employeeDetails.salary,
                //     password: req.password ? req.password : employeeDetails.password,
                //     role_id: req.role_id ? req.role_id : employeeDetails.role_id,
                //     isActive: req.isActive ? req.isActive : employeeDetails.isActive,
                //     isDeleted: req.isDeleted ? req.isDeleted : employeeDetails.isDeleted,
                //     address: req.address ? req.address : employeeDetails.address
                //   })
                // await connection.close();
                responseDTO.data = {};
                responseDTO.message = "Update sucessfully";
                responseDTO.code = 200;
                // resolve(
                return responseDTO;
                // )
            }
            else {
                // await connection.close();
                responseDTO.data = {};
                responseDTO.message = "Employee id not found";
                responseDTO.code = 400;
                // resolve(
                responseDTO;
                // )
            }
            // })
            // })
        });
    }
}
exports.default = EmployeeService;
