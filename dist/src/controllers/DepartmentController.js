"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DepartmentService_1 = __importDefault(require("../services/DepartmentService"));
class DepartmentController {
    constructor() {
        this.departmentService = new DepartmentService_1.default();
        /**
          * Controller to add department
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.addDepartment = async (req, res, next) => {
            try {
                const responseDetails = await this.departmentService.addDepartment(req.body);
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
           * Controller to get department by id
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.getDepartmentByID = async (req, res, next) => {
            try {
                const responseDetails = await this.departmentService.getDepartmentByID(req.body);
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
           * Controller to get all department
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.getAllDepartments = async (req, res, next) => {
            try {
                const responseDetails = await this.departmentService.getAllDepartment();
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
          * Controller to delete department by id
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.deleteRole = async (req, res, next) => {
            try {
                const responseDetails = await this.departmentService.deleteDepartment(req.body);
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
       * Controller to update department details
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
        this.updateDepartment = async (req, res, next) => {
            try {
                const responseDetails = await this.departmentService.updateDepartment(req.body);
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
exports.default = DepartmentController;
//# sourceMappingURL=DepartmentController.js.map