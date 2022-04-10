"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseDTO_1 = __importDefault(require("../DTO/ResponseDTO"));
const Response_1 = __importDefault(require("../repository/Response"));
const Role_1 = require("../entity/Role");
class RoleService {
    constructor() {
        this.responseObject = new Response_1.default();
        /*
        add role
        */
        this.addRole = async (req) => {
            let role = new Role_1.Role();
            let responseDTO = new ResponseDTO_1.default();
            let roleDetails = await this.responseObject.find(Role_1.Role, { role: req.role });
            if (roleDetails) {
                responseDTO.data = {};
                responseDTO.message = "Role ALready Present";
                responseDTO.code = 400;
                return responseDTO;
            }
            else if (roleDetails == undefined) {
                role = { ...req };
                let data = await this.responseObject.save(Role_1.Role, role);
                responseDTO.data = data;
                responseDTO.message = "Role Added sucessfully";
                responseDTO.code = 201;
                return responseDTO;
            }
        };
        /*
       get role by id
       */
        this.getRoleByID = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let roleDetails = await this.responseObject.find(Role_1.Role, { id: req.id });
            if (roleDetails == undefined) {
                responseDTO.data = {};
                responseDTO.message = "Id not present";
                responseDTO.code = 400;
                return responseDTO;
            }
            responseDTO.data = roleDetails;
            responseDTO.message = "Role details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        };
        /*
       get role all roles
       */
        this.getAllRoles = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let roleDetails = await this.responseObject.findAll(Role_1.Role);
            responseDTO.data = roleDetails;
            responseDTO.message = "Role details fetched sucessfully";
            responseDTO.code = 200;
            return responseDTO;
        };
        /*
         delete role
         */
        this.deleteRole = async (req) => {
            let responseDTO = new ResponseDTO_1.default();
            let roleDetails = await this.responseObject.find(Role_1.Role, { id: req.id });
            if (roleDetails) {
                await this.responseObject.delete(Role_1.Role, { id: req.id });
                responseDTO.data = {};
                responseDTO.message = "Role deleted sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "ROle id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        };
        /*
         update role
         */
        this.updateRole = async (req) => {
            let roleDetails = await this.responseObject.find(Role_1.Role, { id: req.id });
            let responseDTO = new ResponseDTO_1.default();
            console.log(roleDetails);
            if (roleDetails) {
                await this.responseObject.update(Role_1.Role, { id: req.id }, {
                    ...req
                });
                responseDTO.data = {};
                responseDTO.message = "Update sucessfully";
                responseDTO.code = 200;
                return responseDTO;
            }
            else {
                responseDTO.data = {};
                responseDTO.message = "Role id not found";
                responseDTO.code = 400;
                return responseDTO;
            }
        };
    }
}
exports.default = RoleService;
//# sourceMappingURL=RoleService.js.map