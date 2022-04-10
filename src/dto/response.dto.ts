import { Employee } from "../entity/employee.entity";

 class ResponseDTO{
    public message!: string;
	public data: Employee | object = new Employee;
	public code!: number;
}
export default ResponseDTO;