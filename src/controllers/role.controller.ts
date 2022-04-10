
import { Request, Response, NextFunction } from 'express';

import ResponseDTO from '../dto/response.dto'
import RoleService from '../services/role.service';

class RoleController {
    private roleService;
    constructor(){
        this.roleService = new RoleService();
    }

    /**
      * Controller to add roles
      * @param  {object} Request - request object
      * @param {object} Response - response object
      * @param {Function} NextFunction
      */
    public addRoles = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO | any = await this.roleService.addRole(req.body);
            res.status(responseDetails.code).json({
                code: responseDetails.code,
                data: responseDetails.data,
                message: responseDetails.message
            });
        } catch (error) {
            next(error);
        }
    };


    /**
        * Controller to get roles
        * @param  {object} Request - request object
        * @param {object} Response - response object
        * @param {Function} NextFunction
        */
    public getRoleByID = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.roleService.getRoleByID(req.body);
            res.status(responseDetails.code).json({
                code: responseDetails.code,
                data: responseDetails.data,
                message: responseDetails.message
            });
        } catch (error) {
            next(error);
        }
    };
    /**
        * Controller to get roles
        * @param  {object} Request - request object
        * @param {object} Response - response object
        * @param {Function} NextFunction
        */
     public getAllRoles = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.roleService.getAllRoles(req.body);
            res.status(responseDetails.code).json({
                code: responseDetails.code,
                data: responseDetails.data,
                message: responseDetails.message
            });
        } catch (error) {
            next(error);
        }
    };
    /**
       * Controller to delete role by id 
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
    public deleteRole = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.roleService.deleteRole(req.body);

            res.status(responseDetails.code).json({
                code: responseDetails.code,
                data: responseDetails.data,
                message: responseDetails.message
            });
        } catch (error) {
            next(error);
        }
    };
    /**
      * Controller to update employee details
      * @param  {object} Request - request object
      * @param {object} Response - response object
      * @param {Function} NextFunction
      */
    public updateRole = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.roleService.updateRole(req.body);
            res.status(responseDetails.code).json({
                code: responseDetails.code,
                data: responseDetails.data,
                message: responseDetails.message
            });
        } catch (error) {
            next(error);
        }
    };
   

}

export default RoleController;