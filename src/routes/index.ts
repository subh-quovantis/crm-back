import express, { IRouter } from 'express';
import DepartmentRoutes from './department.routes';
const router = express.Router();
import EmployeeRoute from './employee.route';
import RoleRoute from './role.route';

import userRoute from './user.routes';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.use('/users',new userRoute().getRoutes());
  router.use('/admin',new EmployeeRoute().getRoutes())
  router.use('/',new DepartmentRoutes().getRoutes())
  router.use('/',new RoleRoute().getRoutes())
  return router;
};

export default routes;
