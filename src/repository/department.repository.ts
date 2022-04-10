
import {
    getRepository
} from "typeorm";
import Logger from "../config/logger";
import { Department } from "../entity/department.entity";
import { typeOrmConnection } from "../utils/typeOrmConnection.util";

class DepartmentRepository {
    public findDepartment = async ( emailObject: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                   
                    const userRepository = getRepository(Department);
                    let employeeDetails = await userRepository.findOne(emailObject)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public saveDepartment = async ( Object: object) => {
        try {
            
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Department);
                    let data = await userRepository.save(Object);
                    await connection.close();
                    return data
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public findAllDepartment = async () => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Department);
                    let employeeDetails = await userRepository.find();
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)

        }
    }
    public deleteDepartment = async (object: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Department);
                    let employeeDetails = await userRepository.delete(object)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public updateDepartment = async ( empIdobject: object, updateObject: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Department);
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
export default DepartmentRepository;