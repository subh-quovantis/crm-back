import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import UserValidator from '../validators/user.validator';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private userValidator = new UserValidator();
  constructor() {
    this.routes();
  }

  private routes = () => {
    //route to login
    this.router.post('/login',this.userValidator.loginUser, this.UserController.loginUser);
    //route to logout
    this.router.post('/logout', this.UserController.logoutUser);
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
