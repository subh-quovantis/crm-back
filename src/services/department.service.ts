
import ResponseDTO from '../dto/response.dto'
import { Department } from '../entity/department.entity';
import DepartmentRepository from '../repository/department.repository';

class DepartmentService {
  private departmentRepository;
  private responseDTO;
  constructor() {
    this.departmentRepository = new DepartmentRepository();
     this.responseDTO = new ResponseDTO()
  }
  /*
  add department
  */
  public addDepartment = async (req: Department) => {
    let department: any = new Department();
    let departmnentDetails = await this.departmentRepository.findDepartment({ department: req.department })
    if (departmnentDetails) {
      this.responseDTO = { data: {},  message: "Department Already Present", code: 400 }
      return this.responseDTO
    }
    else if (departmnentDetails == undefined) {
      department = { ...req }
      const data: any = await this.departmentRepository.saveDepartment(department)
      this.responseDTO = { data: data, message: "Department added sucessfully", code: 200 };
      return this.responseDTO
    }
  }
  /*
 get department by id
 */
  public getDepartmentByID = async (req: Department) => {
    let departmnentDetails: any = await this.departmentRepository.findDepartment({ id: req.id })
    if (departmnentDetails == undefined) {
      this.responseDTO = { data: {}, message: "Id not present", code: 400 };
      return this.responseDTO
    }
    this.responseDTO = { data: departmnentDetails, message:  "Department details fetched sucessfully", code: 200 };
    return this.responseDTO
  }
  /*
get all department 
*/
  public getAllDepartment = async () => {
    let departmnentDetails: any = await this.departmentRepository.findAllDepartment()
    this.responseDTO = { data: departmnentDetails, message: "Department details fetched sucessfully", code: 200 };
    return this.responseDTO
  }
  /*
  delete department
  */
  public deleteDepartment = async (req: Department) => {
    let departmnentDetails = await this.departmentRepository.findDepartment({ id: req.id })
    if (departmnentDetails) {
      await this.departmentRepository.deleteDepartment({ id: req.id })
      this.responseDTO = { data: {}, message: "Department deleted sucessfully", code: 200 };
      return this.responseDTO
    } else {
      this.responseDTO = { data: {}, message: "Department id not found", code: 400 };
      return this.responseDTO
    }
  }
  /*
  update department
  */
  public updateDepartment = async (req: Department) => {
    let departmnentDetails = await this.departmentRepository.findDepartment({ id: req.id })
    if (departmnentDetails) {
      await this.departmentRepository.updateDepartment({ id: req.id },
        {
          ...req
        })
        this.responseDTO = { data: {}, message: "Update sucessfully", code: 200 };
      return this.responseDTO
    }
    else {
      this.responseDTO = { data: {}, message: "Department id not found", code: 400 };
      return this.responseDTO
    }
  }

}

export default DepartmentService;