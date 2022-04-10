
import express, { IRouter } from 'express';
import RoleController from "../controllers/role.controller";
import RoleValidator from '../validators/role.validator';

class RoleRoute {

    private roleController = new RoleController();
    private router = express.Router();
    private RoleValidator = new RoleValidator()

    constructor() {
        this.routes();
    }

    private routes = () => {
        /*
        route to add all roles
        */
        this.router.post('/addRole',this.RoleValidator.addRole, this.roleController.addRoles);
        /*
      route to get roles by id
      */
        this.router.get('/getRolebyId',this.RoleValidator.getRole,this.roleController.getRoleByID);
      /*
      route to get roles
      */
      this.router.get('/getAllRoles',this.roleController.getAllRoles);

        /*
       route to delete roles by id
       */
        this.router.post('/deleteRole',this.RoleValidator.deleteRole,this.roleController.deleteRole);

        /*
      route to update roles
      */
        this.router.put('/updateRole', this.roleController.updateRole);

    };

    public getRoutes = (): IRouter => {
        return this.router;
    };
}

export default RoleRoute