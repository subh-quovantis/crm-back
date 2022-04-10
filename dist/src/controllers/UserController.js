"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const UserService_1 = __importDefault(require("../services/UserService"));
class UserController {
    constructor() {
        this.UserService = new UserService_1.default();
        /**
           * Controller to login user
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.loginUser = async (req, res, next) => {
            try {
                const responseData = await this.UserService.loginUser(req);
                res.status(responseData.code).json({
                    code: responseData.code,
                    data: responseData.data,
                    message: responseData.message
                });
            }
            catch (error) {
                next(error);
            }
        };
        /**
           * Controller to logout user
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.logoutUser = async (req, res, next) => {
            try {
                const responseData = await this.UserService.logoutUser(req);
                res.status(responseData.code).json({
                    code: responseData.code,
                    data: responseData.data,
                    message: responseData.message
                });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map