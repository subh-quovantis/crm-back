
import express, { IRouter } from 'express';
import DepartmentController from '../controllers/department.controller';
import DepartmentValidator from '../validators/department.validator';

class DepartmentRoutes {

    private departmentController= new DepartmentController() ;
    private router = express.Router();
    private department= new DepartmentValidator();
    constructor() {
        this.routes();
        // this.department 
    }

    private routes = () => {
        /*
        route to add all department
        */
       
        this.router.post('/addDepartment',this.department.addDepartment, this.departmentController.addDepartment);
        /*
      route to get department by id
        */
        this.router.get('/getDepartmentbyId',this.department.getDepartment,this.departmentController.getDepartmentByID);

        /*
      route to get all department
      */
      this.router.get('/getAllDepartment',this.departmentController.getAllDepartments);
        /*
       route to delete department by id
       */
        this.router.post('/deleteDepartment',this.department.deleteDepartment,this.departmentController.deleteRole);

        /*
      route to update department
      */
        this.router.put('/updateDepartment',this.departmentController.updateDepartment );
    };

    public getRoutes = (): IRouter => {
        return this.router;
    };
}

export default DepartmentRoutes