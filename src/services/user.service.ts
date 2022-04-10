
import ResponseDTO from '../dto/response.dto';
import bcrypt from 'bcrypt'
import UserRepository from '../repository/user.repository';

declare module "express-session" {
    interface SessionData {
        user: string;
        isAuth: boolean;
    }
}
class UserService {
    private UserRepository ;
    private responseDTO;
    constructor(){
        this.UserRepository = new UserRepository();
        this.responseDTO = new ResponseDTO()
    }
    /*
    Login User
    */
    public loginUser = async (req:any) => {
       
        const employeeDetails:any = await this.UserRepository.findUser( { emailid: req.body.emailid })
    
        if (employeeDetails !== undefined) {
            let passwordVerify: boolean = await bcrypt.compare(req.body.password, employeeDetails.password)
            if (passwordVerify === true) {
                req.session.isAuth = true
                req.session.user = employeeDetails
                this.responseDTO = { data: employeeDetails, message: "Login Sucessful", code: 200 }
                return this.responseDTO
            }
            else {
                this.responseDTO = { data: {}, message: "Wrong password", code: 403 }
                return this.responseDTO
            }
        } else {
            this.responseDTO = { data: {}, message: "Emailid not found, Contact your admin!!", code: 403 }
            return this.responseDTO
        }
    }

    /*
    Logout User
    */
    public logoutUser = async (req:any) => {
        await req.session.destroy();
        this.responseDTO = { data: {}, message: "Logout Sucess", code: 200 }
        return this.responseDTO
    }

}

export default UserService;
