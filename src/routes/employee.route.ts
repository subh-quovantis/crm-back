import employeeController from "../controllers/employee.controller";
import express, { IRouter } from 'express';
import EmployeeValidator from "../validators/employee.validator";

class EmployeeRoute{

  private EmployeeController = new employeeController();
  private router = express.Router();
  private employeeValidator = new EmployeeValidator()
 

  constructor() {
    this.routes();
  }

  private routes = () => {
    /*
    route to add all employee
    */
    this.router.post('/addEmployee',this.employeeValidator.addEmployee, this.EmployeeController.addEmployee);
    /*
    route to get all employee
    */
    this.router.get('/getAllEmployees', this.EmployeeController.getAllEmployees);

      /*
    route to get employee by email
    */
    this.router.post('/getEmployee',this.employeeValidator.getEmployee, this.EmployeeController.getEmployeesByEmail);

     /*
    route to delete employee by id
    */
    this.router.post('/deleteEmployee',this.employeeValidator.deleteEmployee, this.EmployeeController.deleteEmployee);
     /*
    route to set isDeleted true
    */
    this.router.put('/isDeleted',this.employeeValidator.isDelete, this.EmployeeController.setIsDeleted);

      /*
    route to update employee
    */
    this.router.put('/updateEmployee', this.EmployeeController.updateEmployee);

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default EmployeeRoute