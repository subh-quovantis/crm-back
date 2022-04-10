
import {
    getRepository
} from "typeorm";
import Logger from "../config/logger";
import { Employee } from "../entity/employee.entity";


import { typeOrmConnection } from "../utils/typeOrmConnection.util";

class UserRepository {
    public findUser = async ( emailObject: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                   
                    const userRepository = getRepository(Employee);
                    let employeeDetails = await userRepository.findOne(emailObject)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)

        }
    }
  

}
export default UserRepository;