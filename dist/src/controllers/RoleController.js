"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RoleService_1 = __importDefault(require("../services/RoleService"));
class RoleController {
    constructor() {
        this.roleService = new RoleService_1.default();
        /**
          * Controller to add roles
          * @param  {object} Request - request object
          * @param {object} Response - response object
          * @param {Function} NextFunction
          */
        this.addRoles = async (req, res, next) => {
            try {
                const responseDetails = await this.roleService.addRole(req.body);
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
            * Controller to get roles
            * @param  {object} Request - request object
            * @param {object} Response - response object
            * @param {Function} NextFunction
            */
        this.getRoleByID = async (req, res, next) => {
            try {
                const responseDetails = await this.roleService.getRoleByID(req.body);
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
            * Controller to get roles
            * @param  {object} Request - request object
            * @param {object} Response - response object
            * @param {Function} NextFunction
            */
        this.getAllRoles = async (req, res, next) => {
            try {
                const responseDetails = await this.roleService.getAllRoles(req.body);
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
           * Controller to delete role by id
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.deleteRole = async (req, res, next) => {
            try {
                const responseDetails = await this.roleService.deleteRole(req.body);
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
        this.updateRole = async (req, res, next) => {
            try {
                const responseDetails = await this.roleService.updateRole(req.body);
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
exports.default = RoleController;
//# sourceMappingURL=RoleController.js.map