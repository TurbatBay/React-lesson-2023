const express = require('express')
const User = require('../models/Users')
const Router = express.Router()

Router.get('/users', async (request, response) => {
  const result = await User.find({})
  console.log(result)
  response.json({ data: result })
})

Router.post('/user', async (request, response) => {
  const body = request.body
  console.log(body)

  const newUser = new User(body)
  const result = await newUser.save()
  console.log(result)
  response.json({
    data: [],
  })
})
//GET USER BY ID
Router.get('/user', async (request, response) => {
  const userId = request.query.id
  console.log(userId)

  const user = await User.findOne({ _id: userId })
  response.json({
    data: [],
  })
})
//GET USER BY EMAIL
Router.get('/userByEmail', async (request, response) => {
  const userEmail = request.query.email
  console.log(userEmail)
  const userBuilder = await User.find({ email: userEmail }, '_id name email', {
    sort: 'lastLogin',
  }).exec()

  const user = await User.findOne({ email: userEmail })

  response.json({
    data: userBuilder,
  })
})
// GET USER BY NAME IG
Router.get('/userByName', async (request, response) => {
  const userEmail = request.query.email

  const foundUser = await User.findByUserEmail(userEmail)

  response.json({ data: foundUser })
})

//UPDATEONE
Router.put('/updateOneUser', async (request, response) => {
  const result = await User.updateOne(
    { email: 'turu@gmail.com' },
    { $set: { lastLogin: Date.now() } }
  )

  response.json({ data: result })
})

Router.delete('/user', async (request, response) => {
  const body = request.body
  console.log(body)

  const result = await User.findOneAndDelete({ _id: body.id })

  response.json({ data: [] })
})
module.exports = Router
