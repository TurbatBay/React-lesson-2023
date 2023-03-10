import express, { application } from 'express'
const admin_router = express.Router()
import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from '../services/employee-services.js'

admin_router.get('/employees', async (request, response) => {
  const result = await getEmployees()
  response.status(200).send(result)
})
//update
admin_router.put('/employee', async (request, response) => {
  const body = request.body
  console.log(body)
  const result = await updateEmployee(body.empNo, body.lastName, body.gender)
  console.log(result)
  response.status(200).send({})
})
//delete
admin_router.delete('/employee', async (request, response) => {
  const body = request.body
  console.log(body)

  const result = await fireEmployee(body.empNo)
  response.status(200).send(result)
})
//create
admin_router.post('/employee', async (request, response) => {
  //   const result = await hireEmployee()
  const { birthDate, firstName, lastName, gender, hireDate } = request.body
  const { max } = await getMaxNo()
  console.log(max)
  const result = await hireEmployee(
    max + 1,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate
  )
  console.log(result)

  response.status(200).send({})
})

export default admin_router
