import { createConnection, getConnectionOptions } from "typeorm"

export const typeOrmConnection=async()=>{
const connectionOptions=await getConnectionOptions("development");
return createConnection({...connectionOptions,name:"default"})

}