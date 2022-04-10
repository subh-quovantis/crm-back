"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoleController_1 = __importDefault(require("../controllers/RoleController"));
class RoleRoute {
    //   private UserValidator = new userValidator();
    constructor() {
        this.roleController = new RoleController_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all roles
            */
            this.router.post('/addRole', this.roleController.addRoles);
            /*
          route to get roles by id
          */
            this.router.get('/getRolebyId', this.roleController.getRoleByID);
            /*
            route to get roles
            */
            this.router.get('/getAllRoles', this.roleController.getAllRoles);
            /*
           route to delete roles by id
           */
            this.router.post('/deleteRole', this.roleController.deleteRole);
            /*
          route to update roles
          */
            this.router.put('/updateRole', this.roleController.updateRole);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = RoleRoute;
//# sourceMappingURL=RoleRoute.js.map