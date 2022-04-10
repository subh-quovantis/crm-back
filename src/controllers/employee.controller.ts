
import { Request, Response, NextFunction } from 'express';
import EmployeeService from '../services/employee.service';
import ResponseDTO from '../dto/response.dto'
class EmployeeController {
  private employeeService ;
  constructor(){
    this.employeeService = new EmployeeService();
  }

  /**
    * Controller to add Employee
    * @param  {object} Request - request object
    * @param {object} Response - response object
    * @param {Function} NextFunction
    */
  public addEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseDetails:any = await this.employeeService.addEmployee(req.body);
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
     * Controller to get all users available
     * @param  {object} Request - request object
     * @param {object} Response - response object
     * @param {Function} NextFunction
     */
  public getAllEmployees = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseDetails:any= await this.employeeService.getAllEmployee(req.body);
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
     * Controller to get all users available
     * @param  {object} Request - request object
     * @param {object} Response - response object
     * @param {Function} NextFunction
     */
    public getEmployeesByEmail = async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<any> => {
      try {
        const responseDetails:ResponseDTO= await this.employeeService.getEmployeeByEmail(req.body);
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
     * Controller to delete employee by id 
     * @param  {object} Request - request object
     * @param {object} Response - response object
     * @param {Function} NextFunction
     */
  public deleteEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseDetails:ResponseDTO = await this.employeeService.deleteEmployee(req.body);

      res.status(responseDetails.code ).json({
        code: responseDetails.code,
        data: responseDetails.data,
        message: responseDetails.message
      });
    } catch (error) {
      next(error);
    }
  };
  /**
     * Controller to set isDeleted true 
     * @param  {object} Request - request object
     * @param {object} Response - response object
     * @param {Function} NextFunction
     */
  public setIsDeleted = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseDetails:ResponseDTO = await this.employeeService.setIsDeleted(req.body);

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
  public updateEmployee = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const responseDetails:ResponseDTO = await this.employeeService.updateEmployee(req.body);

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

export default EmployeeController;