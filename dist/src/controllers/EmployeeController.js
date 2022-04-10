"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeService_1 = __importDefault(require("../services/EmployeeService"));
class EmployeeController {
    constructor() {
        this.employeeService = new EmployeeService_1.default();
        /**
          * Controller to add Employee
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.addEmployee = async (req, res, next) => {
            try {
                const responseDetails = await this.employeeService.addEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        };
        /**
           * Controller to get all users available
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.getAllEmployees = async (req, res, next) => {
            try {
                const responseDetails = await this.employeeService.getAllEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        };
        /**
          * Controller to get all users available
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.getEmployeesByEmail = async (req, res, next) => {
            try {
                const responseDetails = await this.employeeService.getEmployeeByEmail(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        };
        /**
           * Controller to delete employee by id
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.deleteEmployee = async (req, res, next) => {
            try {
                const responseDetails = await this.employeeService.deleteEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        };
        /**
           * Controller to set isDeleted true
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.setIsDeleted = async (req, res, next) => {
            try {
                const responseDetails = await this.employeeService.setIsDeleted(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        };
        /**
           * Controller to update employee details
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.updateEmployee = async (req, res, next) => {
            try {
                const responseDetails = await this.employeeService.updateEmployee(req.body);
                res.status(responseDetails.code).json({
                    code: responseDetails.code,
                    data: responseDetails.data,
                    message: responseDetails.message
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=EmployeeController.js.map