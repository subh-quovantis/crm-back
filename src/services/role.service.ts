
import ResponseDTO from '../dto/response.dto';
import { Role } from '../entity/role.entity';
import RoleRepository from '../repository/role.repository';

class RoleService {
  private roleRepository;
  private responseDTO = new ResponseDTO()
  constructor(){
    this.roleRepository = new RoleRepository();
    this.responseDTO = new ResponseDTO()
  }
  /*
  add role
  */
  public addRole = async (req: Role) => {
    let role: any = new Role();
    let roleDetails = await this.roleRepository.findRole( { role: req.role })
    if (roleDetails) {
      this.responseDTO = { data: {}, message: "Role ALready Present", code: 400 }
      return this.responseDTO
    }
    else if (roleDetails == undefined) {
      role = { ...req }
      let data:any =await this.roleRepository.saveRole( role)
      this.responseDTO = { data: data, message: "Role Added sucessfully", code: 201 }
      return this.responseDTO
    }
  }
   /*
  get role by id
  */
  public getRoleByID = async (req:Role) => {
    let roleDetails :any = await this.roleRepository.findRole({ id: req.id })
    if (roleDetails==undefined) {
      this.responseDTO = { data: {}, message: "Id not present", code: 400 }
      return this.responseDTO
    }
    this.responseDTO = { data: roleDetails, message: "Role details fetched sucessfully", code: 200 }
    return this.responseDTO
  }
   /*
  get role all roles
  */
  public getAllRoles = async (req:Role) => {
    let roleDetails :any = await this.roleRepository.findAllRole()
    this.responseDTO = { data: roleDetails, message: "Role details fetched sucessfully", code: 200 }
    return this.responseDTO
  }
 /*
  delete role
  */
  public deleteRole = async (req: Role) => {
    let roleDetails = await this.roleRepository.findRole( { id: req.id })
    if (roleDetails) {
      await this.roleRepository.deleteRole({ id: req.id })
      this.responseDTO = { data:{}, message: "Role deleted sucessfully", code: 200 }
      return this.responseDTO
    } else {
      this.responseDTO = { data:{}, message: "Role id not found", code: 400 }
      return this.responseDTO
    }
  }
  /*
   update role
   */
   public updateRole = async (req: Role) => {
    let roleDetails = await this.roleRepository.findRole({ id: req.id })
    console.log(roleDetails)
    if (roleDetails) {
      await this.roleRepository.updateRole( { id: req.id },
        {
          ...req
        })
      this.responseDTO = { data:{}, message: "Update sucessfully", code: 200 }
      
      return this.responseDTO
    }
    else {
      this.responseDTO = { data:{}, message: "Role id not found", code: 400 }
      return this.responseDTO
    }
  }
}

export default RoleService;