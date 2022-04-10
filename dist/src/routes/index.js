"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DepartmentRoutes_1 = __importDefault(require("./DepartmentRoutes"));
const router = express_1.default.Router();
const EmployeeRoute_1 = __importDefault(require("./EmployeeRoute"));
const RoleRoute_1 = __importDefault(require("./RoleRoute"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
    router.use('/users', new UserRoutes_1.default().getRoutes());
    router.use('/admin', new EmployeeRoute_1.default().getRoutes());
    router.use('/', new DepartmentRoutes_1.default().getRoutes());
    router.use('/', new RoleRoute_1.default().getRoutes());
    return router;
};
exports.default = routes;
//# sourceMappingURL=index.js.map