import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';


class RoleValidator {
    public addRole = (
        req: Request,
        res: Response,
        next: NextFunction
    ): any => {
        const schema = Joi.object({
            role: Joi.string().min(2).required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            next(error);
        } else {
            next(); 
        }
    };
    public getRole = (
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
 
    public deleteRole = (
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

export default RoleValidator;
