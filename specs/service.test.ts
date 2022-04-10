import httpMock from 'node-mocks-http';
import {mockRequest,mockResponse} from 'jest-mock-req-res'
import EmployeeController from '../src/controllers/employee.controller';

import EmployeeService from '../src/services/employee.service';


describe('testing employee controller',()=>{
  jest.mock('../src/services/EmployeeService', () => {
    return {
      getAllEmployee: jest.fn()
    };
  });
  
  let employeeService = new EmployeeService();
  
  let employeeController = new EmployeeController();
  
  let req: any, res: any, next: any;
  
  beforeEach(() => {
    req = httpMock.createRequest({});
    res = httpMock.createResponse({
      
    });
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
    await employeeController.getAllEmployees(req, res, next)
    
    expect(employeeService.getAllEmployee).toHaveBeenCalled();
    // expect(employeeController.getAllEmployees).toHaveBeenCalled();
  });
})
