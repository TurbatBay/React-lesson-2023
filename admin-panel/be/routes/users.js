import express, { application } from 'express'
const user_router = express.Router()
import {
  deleteUser,
  // getMaxNo,
  // addUser,
  updateUser,
} from '../services/users-service.js'

user_router.get('/users', async (request, response) => {
  const result = await getUsers()
  response.status(200).send(result)
})
//update
user_router.put('/user', async (request, response) => {
  const body = request.body
  console.log(body)
  const result = await updateUser(body.user_role_id)
  console.log(result)
  response.status(200).send({})
})
//delete
user_router.delete('/user', async (request, response) => {
  const body = request.body
  console.log(body)

  const result = await deleteUser(body.user_role_id)
  response.status(200).send(result)
})
//create
// user_router.post('/user', async (request, response) => {
//   //   const result = await addUser()
//   const { user_role_id, user_role_name } = request.body
//   const { max } = await getMaxNo()
//   console.log(max)
//   const result = await addUser(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   )
//   console.log(result)

//   response.status(200).send({})
// })

export default user_router
