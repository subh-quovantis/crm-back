"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeController_1 = __importDefault(require("../controllers/EmployeeController"));
const express_1 = __importDefault(require("express"));
class EmployeeRoute {
    //   private UserValidator = new userValidator();
    constructor() {
        this.EmployeeController = new EmployeeController_1.default();
        this.router = express_1.default.Router();
        this.routes = () => {
            /*
            route to add all employee
            */
            this.router.post('/addEmployee', this.EmployeeController.addEmployee);
            /*
            route to get all employee
            */
            this.router.get('/getAllEmployees', this.EmployeeController.getAllEmployees);
            /*
          route to get employee by email
          */
            this.router.post('/getEmployee', this.EmployeeController.getEmployeesByEmail);
            /*
           route to delete employee by id
           */
            this.router.post('/deleteEmployee', this.EmployeeController.deleteEmployee);
            /*
           route to set isDeleted true
           */
            this.router.put('/isDeleted', this.EmployeeController.setIsDeleted);
            /*
          route to update employee
          */
            this.router.put('/updateEmployee', this.EmployeeController.updateEmployee);
        };
        this.getRoutes = () => {
            return this.router;
        };
        this.routes();
    }
}
exports.default = EmployeeRoute;
//# sourceMappingURL=EmployeeRoute.js.map