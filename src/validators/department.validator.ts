import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';


class DepartmentValidator {
    public addDepartment = (
        req: Request,
        res: Response,
        next: NextFunction
    ): any => {
        const schema = Joi.object({
            department: Joi.string().min(2).required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
    public getDepartment = (
        req: Request,
        res: Response,
        next: NextFunction
    ): any => {
        const schema = Joi.object({
            id:Joi.number().min(1).required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
 
    public deleteDepartment = (
        req: Request,
        res: Response,
        next: NextFunction
    ): any => {
        const schema = Joi.object({
            id:Joi.number().min(1).required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
  
}

export default DepartmentValidator;
