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
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this.UserService = new user_service_1.default();
        /**
           * Controller to login user
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.loginUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseData = yield this.UserService.loginUser(req);
                console.log(responseData);
                res.status(responseData.code).json({
                    code: responseData.code,
                    data: responseData.data,
                    message: responseData.message
                });
            }
            catch (error) {
                next(error);
            }
        });
        /**
           * Controller to logout user
           * @param  {object} Request - request object
           * @param {object} Response - response object
           * @param {Function} NextFunction
           */
        this.logoutUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const responseData = yield this.UserService.logoutUser(req);
                res.status(responseData.code).json({
                    code: responseData.code,
                    data: responseData.data,
                    message: responseData.message
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UserController;
