"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
class UserValidator {
    constructor() {
        this.newUser = (req, res, next) => {
            const schema = joi_1.default.object({
                name: joi_1.default.string().min(4).required()
            });
            const { error } = schema.validate(req.body);
            if (error) {
                next(error);
            }
            next();
        };
    }
}
exports.default = UserValidator;
//# sourceMappingURL=UserValidator.js.map