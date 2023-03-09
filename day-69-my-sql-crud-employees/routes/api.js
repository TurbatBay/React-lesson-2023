import express from 'express'
const apiRouter = express.Router()

import { getPopularCategories } from '../services/category-services.js'
import { getChildrenMenus, getParentMenus } from '../services/menus-services.js'
apiRouter.get('/popular', async (request, response) => {
  const result = await getPopularCategories()
  response.status(200).send(result)
})

apiRouter.get('/menus', async (request, response) => {
  const parentMenus = await getParentMenus()
  console.log(parentMenus)

  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id)
      console.log(children)
      parent.children = children
      return parent
    })
  )

  response.status(200).send([])
})
export default apiRouter

// import express, { application } from 'express'
// const emp_router = express.Router()
// import {
//   fireEmployee,
//   getEmployees,
//   getMaxNo,
//   hireEmployee,
//   updateEmployee,
// } from '../services/employee-services.js'
// import { getPopularCategories } from '../services/category-services'

// emp_router.get('/employees', async (request, response) => {
//   const result = await getEmployees()
//   response.status(200).send(result)
// })
// //update
// emp_router.put('/employee', async (request, response) => {
//   const body = request.body
//   console.log(body)
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender)
//   console.log(result)
//   response.status(200).send({})
// })
// //delete
// emp_router.delete('/employee', async (request, response) => {
//   const body = request.body
//   console.log(body)

//   const result = await fireEmployee(body.empNo)
//   response.status(200).send(result)
// })
// //create
// emp_router.post('/employee', async (request, response) => {
//   //   const result = await hireEmployee()
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body
//   const { max } = await getMaxNo()
//   console.log(max)
//   const result = await hireEmployee(
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

// export default emp_router
