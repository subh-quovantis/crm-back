

export interface ILoginUser  {
    data: {
        name: string,
        emailid: string,
        phone_number: number,
        gender: string,
        salary: number,
        emp_id: number,
        token: string
    }
    message: string,
    code: number,

}
