/* eslint-disable @typescript-eslint/no-explicit-any */
import userService from '../services/user.service';
import { Request,
        Response,
       NextFunction } from 'express';
import ResponseDTO from '../dto/response.dto';

class UserController {
  private UserService ;
  constructor(){
    this.UserService = new userService();
  }

/**
   * Controller to login user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
 public loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const responseData:ResponseDTO =await this.UserService.loginUser(req);
    res.status(responseData.code).json({
      code: responseData.code,
      data:responseData.data,
      message:responseData.message
    });
  } catch (error) {
    next(error);
  }
};


/**
   * Controller to logout user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
 public logoutUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const responseData:ResponseDTO   = await this.UserService.logoutUser(req);
    res.status(responseData.code).json({
      code: responseData.code,
      data:responseData.data,
      message:responseData.message
    });
  } catch (error) {
    next(error);
  }
};

}

export default UserController;
