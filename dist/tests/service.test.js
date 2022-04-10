"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_mocks_http_1 = __importDefault(require("node-mocks-http"));
const EmployeeController_1 = __importDefault(require("../src/controllers/EmployeeController"));
const EmployeeService_1 = __importDefault(require("../src/services/EmployeeService"));
describe('testing employee controller', () => {
    jest.mock('../src/services/EmployeeService', () => {
        return {
            getAllEmployee: jest.fn()
        };
    });
    let employeeService = new EmployeeService_1.default();
    let employeeController = new EmployeeController_1.default();
    let req, res, next;
    beforeEach(() => {
        req = node_mocks_http_1.default.createRequest({});
        res = node_mocks_http_1.default.createResponse({});
        next = null;
        // req=mockRequest({  });
        // res=mockResponse();
        // next = null;
    });
    it.only('should call getAllEmployee from service', async () => {
        employeeService.getAllEmployee = jest
            .fn()
            .mockImplementation(() => {
            // return "hello"
        });
        // const result = ['test'];
        // jest.spyOn(employeeService,'getAllEmployee').mockImplementation(() =>res)
        await employeeController.getAllEmployees(req, res, next);
        expect(employeeService.getAllEmployee).toHaveBeenCalled();
        // expect(employeeController.getAllEmployees).toHaveBeenCalled();
    });
});
//# sourceMappingURL=service.test.js.map