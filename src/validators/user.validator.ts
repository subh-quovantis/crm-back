import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {

  public loginUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ): any => {
    const schema = Joi.object({
      emailid: Joi.string().email().required(),
      password: Joi.string()
        .alphanum()
        .min(3)
        .max(12)
        .required()
        
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    } else {
      next();
    }
  };
}

export default UserValidator;
