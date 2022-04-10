
import { Employee } from '../entity/employee.entity';
import ResponseDTO from '../dto/response.dto'
import bcrypt from 'bcrypt'
import EmployeeRepository from '../repository/employee.repository';

class EmployeeService {
  private employeeRepository;
  private responseDTO = new ResponseDTO()
  constructor() {
    this.employeeRepository = new EmployeeRepository()
    this.responseDTO = new ResponseDTO()
  }
  /*
  add employees
  */
  public addEmployee = async (req: Employee) => {
    let emp: any = new Employee();
    let employeeDetails = await this.employeeRepository.findEmployee({ emailid: req.emailid })
    if (employeeDetails) {
      this.responseDTO = { data: {}, message: "Email id ALready registered", code: 400 }
      return this.responseDTO
    }
    else if (employeeDetails == undefined) {
      const passwordHash = await bcrypt.hash(req.password, 9)
      req.password = passwordHash
      emp = { ...req }
      let data: any = await this.employeeRepository.saveEmployee(emp)
      this.responseDTO = { data: data, message: "Employee Added sucessfully", code: 201 }
      return this.responseDTO
    }
  }
  /*
  get ALL Employees
  */
  public getAllEmployee = async () => {
    let employeeDetails: any = await this.employeeRepository.findAllEmployee();
    this.responseDTO = { data: employeeDetails, message: "Employee details fetched sucessfully", code: 200 }
    return this.responseDTO
  }
  /*
get ALL Employees by email
*/
  public getEmployeeByEmail = async (req: Employee) => {
    let employeeDetails: any = await this.employeeRepository.findEmployee({ emailid: req.emailid })
    if (employeeDetails == undefined) {
      this.responseDTO = { data: {}, message: "Email id not registered", code: 400 }
      return this.responseDTO
    }
    this.responseDTO = { data: employeeDetails, message: "Employee details fetched sucessfull", code: 200 }
    return this.responseDTO
  }
  /*
  delete Employees
  */
  public deleteEmployee = async (req: Employee) => {
    let employeeDetails = await this.employeeRepository.findEmployee({ id: req.id })
    if (employeeDetails) {
      await this.employeeRepository.deleteEmployee({ id: req.id })
      this.responseDTO = { data: {}, message: "Employee deleted sucessfully", code: 200 }
      return this.responseDTO
    } else {
      this.responseDTO = { data: {}, message: "Employee id not found", code: 400 }
      return this.responseDTO
    }
  }
  /*
  set isDelete to true
  */
  public setIsDeleted = async (req: Employee) => {
    let employeeDetails = await this.employeeRepository.findEmployee({ id: req.id })
    if (employeeDetails) {
      await this.employeeRepository.updateEmployee({ id: req.id }, { isDeleted: true })
      this.responseDTO = { data: {}, message: "Set isDelete to true sucessfully", code: 200 }
      return this.responseDTO
    }
    else {
      this.responseDTO = { data: {}, message: "Employee id not found", code: 400 }
      return this.responseDTO
    }
  }
  /*
   update Employees
   */
  public updateEmployee = async (req: Employee) => {
    let employeeDetails = await this.employeeRepository.findEmployee({ id: req.id })
    if (employeeDetails) {
      await this.employeeRepository.updateEmployee({ id: req.id },
        {
          ...req
        })
      this.responseDTO = { data: {}, message: "Update sucessfully", code: 200 }
      return this.responseDTO
    }
    else {
      this.responseDTO = { data: {}, message: "Employee id not found", code: 400 }
      return this.responseDTO
    }
  }

}

export default EmployeeService;