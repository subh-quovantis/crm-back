
import {
    getRepository
} from "typeorm";
import Logger from "../config/logger";
import { Role } from "../entity/role.entity";


import { typeOrmConnection } from "../utils/typeOrmConnection.util";

class RoleRepository {
    public findRole = async ( emailObject: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                   
                    const userRepository = getRepository(Role);
                    let employeeDetails = await userRepository.findOne(emailObject)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)

        }
    }
    public saveRole = async ( Object: object) => {
        try {
            
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Role);
                    let data = await userRepository.save(Object);
                    await connection.close();
                    return data
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public findAllRole = async () => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Role);
                    let employeeDetails = await userRepository.find();
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)

        }
    }
    public deleteRole = async ( object: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Role);
                    let employeeDetails = await userRepository.delete(object)
                    await connection.close();
                    return employeeDetails
                })
        }
        catch (error) {
            Logger.logger.error(error)
        }
    }
    public updateRole = async ( empIdobject: object, updateObject: object) => {
        try {
            return await typeOrmConnection()
                .then(async (connection) => {
                    const userRepository = getRepository(Role);
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
export default RoleRepository;