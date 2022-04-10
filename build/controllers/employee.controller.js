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
const employee_service_1 = __importDefault(require("../services/employee.service"));
class EmployeeController {
    constructor() {
        this.employeeService = new employee_service_1.default();
        /**
          * Controller to add Employee
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.addEmployee = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseDetails = yield this.employeeService.addEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
           * Controller to get all users available
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.getAllEmployees = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseDetails = yield this.employeeService.getAllEmployee(req);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
           * Controller to delete employee by id
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.deleteEmployee = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseDetails = yield this.employeeService.deleteEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
           * Controller to set isDeleted true
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.setIsDeleted = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseDetails = yield this.employeeService.setIsDeleted(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
           * Controller to update employee details
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.updateEmployee = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseDetails = yield this.employeeService.updateEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = EmployeeController;
