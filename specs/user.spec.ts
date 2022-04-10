

// import { Employee } from '../src/entity/employee.entity';
// import EmployeeRepository from '../src/repository/employee.repository';

// // import faker from 'faker'



// describe("testing save repository", () => {
//   it("save repository should return a object", async () => {
//     let req = {
//       "fullname": "subham das",
//       "emailid": "subham2299998@gmail.com",
//       "phone_number": 700332121,
//       "gender": "male",
//       "salary": 2542,
//       "password": "1234",
//       "role_id": 0,
//       "isActive": true,
//       "isDeleted": false,
//       "address": "durgapur"
//     }
//     let empDetails = await new EmployeeRepository().saveEmployee( req)
//     expect(empDetails).toEqual(req)
//   })
 
// })
// // describe("testing findall repository", () => {
// //   it("findall repository should return a array", async () => {
// //     let empDetails = await new repo().findAll(Employee)
// //     console.log(empDetails)
// //     expect(empDetails?.length).toBe(1)
// //   })
// // })

// // describe("testing find repository", () => {
// //   it("if correct id sent  should return a object", async () => {
// //     let empDetails: any = await new repo().find(Employee, { "id": 1})
// //     expect(empDetails).toMatchObject({ "id": 1 })
// //   })
// //   it("if wrong id sent should return null", async () => {
// //     const empDetails: any = await new repo().find(Employee, { "id": 5 })
// //     expect(empDetails).toEqual(undefined)
// //   })
// // })

// // describe("testing delete repository", () => {
// //   it("if correct id sent should return a object", async () => {
// //     let empDetails = await new repo().delete(Employee, { "id": 1 })
// //     expect(empDetails).toMatchObject({ "affected": 1 })
// //   })
// //   it("if wrong id sent should return a object with affected 0", async () => {
// //     let empDetails = await new repo().delete(Employee, { "id": 5 })
// //     console.log(empDetails)
// //     expect(empDetails).toMatchObject({ "affected": 0 })
// //   })
// // })

