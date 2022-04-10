
import {
    getRepository
} from "typeorm";
import Logger from "../config/logger";
import { Employee } from "../entity/employee.entity";

import { typeOrmConnection } from "../utils/typeOrmConnection.util";

class EmployeeRepository {
    public findEmployee = async ( emailObject: object) => {
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
    public saveEmployee = async ( Object: object) => {
        try {
            
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Employee);
                    let data = await userRepository.save(Object);
                    await connection.close();
                    return data
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public findAllEmployee = async () => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Employee);
                    let employeeDetails = await userRepository.find();
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)

        }
    }
    public deleteEmployee = async ( object: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Employee);
                    let employeeDetails = await userRepository.delete(object)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public updateEmployee = async ( empIdobject: object, updateObject: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Employee);
                    let employeeDetails = await userRepository.update(empIdobject, updateObject)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)

        }
    }

}
export default EmployeeRepository;