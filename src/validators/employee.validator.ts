import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';


class EmployeeValidator {
    public addEmployee = (
        req: Request,
        res: Response,
        next: NextFunction
    ): any => {
        const schema = Joi.object({
            emailid: Joi.string().email().required(),
            password: Joi.string().alphanum().min(3).max(12).required(),
            fullname: Joi.string().min(2).required(),
            phone_number: Joi.number().min(10).required(),
            gender:Joi.string().alphanum().min(3).max(8).required(),
            salary:Joi.number().min(1).required(),
            address:Joi.string().min(2).max(200).required(),
            role_id:Joi.number().min(1).required(),
            isActive:Joi.boolean().required(),
            isDeleted:Joi.boolean().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
    public getEmployee = (
        req: Request,
        res: Response,
        next: NextFunction
    ): any => {
        const schema = Joi.object({
            emailid: Joi.string().email().required()
        });
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    };
    public isDelete = (
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
    public deleteEmployee = (
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

export default EmployeeValidator;
