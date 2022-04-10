"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseDTO_1 = __importDefault(require("../DTO/ResponseDTO"));
const Response_1 = __importDefault(require("../repository/Response"));
const Department_1 = require("../entity/Department");
class DepartmentService {
    constructor() {
        this.responseObject = new Response_1.default();
        /*
        add department
        */
        this.addDepartment = async (req) => {
            let department = new Department_1.Department();
            let responseDTO = new ResponseDTO_1.default();
            let departmnentDetails = await this.responseObject.find(Department_1.Department, { department: req.department });
            if (departmnentDetails) {
                responseDTO.data = {};
                responseDTO.message = "Department ALready Present";
                responseDTO.code = 400;
                return responseDTO;
            }
            else if (departmnentDetails == undefined) {
                department = { ...req };
                let data = await this.responseObject.save(Department_1.Department, department);
                responseDTO.data = data;
                responseDTO.message = "Department Added sucessfully";
                responseDTO.code = 201;
                return responseDTO;
            }
        };
        /*
       get department by id
       */
        this.getDepartmentByID = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let departmnentDetails = await this.responseObject.find(Department_1.Department, { id: req.id });
            if (departmnentDetails == undefined) {
                responseDTO.data = {};
                responseDTO.message = "Id not present";
                responseDTO.code = 400;
                return responseDTO;
            }
            responseDTO.data = departmnentDetails;
            responseDTO.message = "Department details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        };
        /*
     get all department
     */
        this.getAllDepartment = async () => {
            let responseDTO = new ResponseDTO_1.default();
            let departmnentDetails = await this.responseObject.findAll(Department_1.Department);
            responseDTO.data = departmnentDetails;
            responseDTO.message = "Department details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        };
        /*
        delete department
        */
        this.deleteDepartment = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let departmnentDetails = await this.responseObject.find(Department_1.Department, { id: req.id });
            if (departmnentDetails) {
                await this.responseObject.delete(Department_1.Department, { id: req.id });
                responseDTO.data = {};
                responseDTO.message = "Department deleted sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "Department id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        };
        /*
        update department
        */
        this.updateDepartment = async (req) => {
            let departmnentDetails = await this.responseObject.find(Department_1.Department, { id: req.id });
            let responseDTO = new ResponseDTO_1.default();
            if (departmnentDetails) {
                await this.responseObject.update(Department_1.Department, { id: req.id }, {
                    ...req
                });
                responseDTO.data = {};
                responseDTO.message = "Update sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "Department id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        };
    }
}
exports.default = DepartmentService;
//# sourceMappingURL=DepartmentService.js.map