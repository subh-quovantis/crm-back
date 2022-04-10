
import { Request, Response, NextFunction } from 'express';

import ResponseDTO from '../dto/response.dto'
import DepartmentService from '../services/department.service';



class DepartmentController {
    private departmentService;
    constructor (){
        this.departmentService= new DepartmentService();
    }

    /**
      * Controller to add department
      * @param  {object} Request - request object
      * @param {object} Response - response object
      * @param {Function} NextFunction
      */
    public addDepartment = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO | any = await this.departmentService.addDepartment(req.body);
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
       * Controller to get department by id
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
    public getDepartmentByID = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.departmentService.getDepartmentByID(req.body);
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
       * Controller to get all department
       * @param  {object} Request - request object
       * @param {object} Response - response object
       * @param {Function} NextFunction
       */
     public getAllDepartments = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.departmentService.getAllDepartment();
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
      * Controller to delete department by id 
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
            const responseDetails: ResponseDTO = await this.departmentService.deleteDepartment(req.body);
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
   * Controller to update department details
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
    public updateDepartment = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<any> => {
        try {
            const responseDetails: ResponseDTO = await this.departmentService.updateDepartment(req.body);
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

export default DepartmentController;