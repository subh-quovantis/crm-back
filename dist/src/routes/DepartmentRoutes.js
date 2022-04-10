"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DepartmentController_1 = __importDefault(require("../controllers/DepartmentController"));
class DepartmentRoutes {
    //   private UserValidator = new userValidator();
    constructor() {
        this.departmentController = new DepartmentController_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all department
            */
            this.router.post('/addDepartment', this.departmentController.addDepartment);
            /*
          route to get department by id
            */
            this.router.get('/getDepartmentbyId', this.departmentController.getDepartmentByID);
            /*
          route to get all department
          */
            this.router.get('/getAllDepartment', this.departmentController.getAllDepartments);
            /*
           route to delete department by id
           */
            this.router.post('/deleteDepartment', this.departmentController.deleteRole);
            /*
          route to update department
          */
            this.router.put('/updateDepartment', this.departmentController.updateDepartment);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = DepartmentRoutes;
//# sourceMappingURL=DepartmentRoutes.js.map