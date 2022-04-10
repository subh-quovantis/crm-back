"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const employee_route_1 = __importDefault(require("./employee.route"));
const user_route_1 = __importDefault(require("./user.route"));
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.get('/', (req, res) => {
    });
    router.use('/users', new user_route_1.default().getRoutes());
    router.use('/admin', new employee_route_1.default().getRoutes());
    return router;
};
exports.default = routes;
