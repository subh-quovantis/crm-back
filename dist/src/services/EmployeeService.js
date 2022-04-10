"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("../entity/Employee");
const ResponseDTO_1 = __importDefault(require("../DTO/ResponseDTO"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Response_1 = __importDefault(require("../repository/Response"));
class EmployeeService {
    constructor() {
        this.responseObject = new Response_1.default();
        /*
        add employees
        */
        this.addEmployee = async (req) => {
            let emp = new Employee_1.Employee();
            let responseDTO = new ResponseDTO_1.default();
            let employeeDetails = await this.responseObject.find(Employee_1.Employee, { emailid: req.emailid });
            if (employeeDetails) {
                responseDTO.data = {};
                responseDTO.message = "Email id ALready registered";
                responseDTO.code = 400;
                return responseDTO;
            }
            else if (employeeDetails == undefined) {
                const passwordHash = await bcrypt_1.default.hash(req.password, 9);
                req.password = passwordHash;
                emp = { ...req };
                let data = await this.responseObject.save(Employee_1.Employee, emp);
                responseDTO.data = data;
                responseDTO.message = "Employee Added sucessfully";
                responseDTO.code = 201;
                return responseDTO;
            }
        };
        /*
        get ALL Employees
        */
        this.getAllEmployee = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let employeeDetails = await this.responseObject.findAll(Employee_1.Employee);
            responseDTO.data = employeeDetails;
            responseDTO.message = "Employee details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        };
        /*
      get ALL Employees by email
      */
        this.getEmployeeByEmail = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let employeeDetails = await this.responseObject.find(Employee_1.Employee, { emailid: req.emailid });
            if (employeeDetails == undefined) {
                responseDTO.data = {};
                responseDTO.message = "Email id not registered";
                responseDTO.code = 400;
                return responseDTO;
            }
            responseDTO.data = employeeDetails;
            responseDTO.message = "Employee details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        };
        /*
        delete Employees
        */
        this.deleteEmployee = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let employeeDetails = await this.responseObject.find(Employee_1.Employee, { id: req.id });
            if (employeeDetails) {
                await this.responseObject.delete(Employee_1.Employee, { id: req.id });
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
        };
        /*
        set isDelete to true
        */
        this.setIsDeleted = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let employeeDetails = await this.responseObject.find(Employee_1.Employee, { id: req.id });
            if (employeeDetails) {
                await this.responseObject.update(Employee_1.Employee, { id: req.id }, { isDeleted: true });
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
        };
        /*
         update Employees
         */
        this.updateEmployee = async (req) => {
            let employeeDetails = await this.responseObject.find(Employee_1.Employee, { id: req.id });
            let responseDTO = new ResponseDTO_1.default();
            if (employeeDetails) {
                await this.responseObject.update(Employee_1.Employee, { id: req.id }, {
                    ...req
                });
                responseDTO.data = {};
                responseDTO.message = "Update sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "Employee id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        };
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map