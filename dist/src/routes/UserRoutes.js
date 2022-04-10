"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
class UserRoutes {
    constructor() {
        this.UserController = new UserController_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            //route to login
            this.router.post('/login', this.UserController.loginUser);
            //route to logout
            this.router.post('/logout', this.UserController.logoutUser);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map