const express = require('express')

const adminRouter = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserRole = require('../models/UserRole')

//register endpoint
adminRouter.post('/register', async (request, response) => {
  const data = request.body
  // console.log(data)

  if (data) {
    const oldUser = await Users.findOne({ email: data.email })
    if (oldUser !== null) {
      return response.json({ error: 'Already registered' })
    } else {
      //hash password
      const hashedPassword = await bcrypt.hash(data.password, 10)

      data.password = hashedPassword
      try {
        const user = await Users.create(data)
        console.log(user)
        const result = await user.populate('userrole')
        // console.log('User populated')

        res.status(201).json({
          message: 'User created succesfully',
          data: result,
        })
      } catch (error) {
        response.status(500).json({
          success: false,
          error: error,
        })
      }
      //create user
      // Users.create({ email: email, password: hashedPassword })
      //   .then((data) => {
      //     response.status(201).json({
      //       message: 'User created succesfully',
      //       email,
      //     })
      //     return
      //   })
      //   .catch((error) => {
      //     response.status(500).json({
      //       success: false,
      //       error,
      //     })
      //   })
    }
  }
})

adminRouter.post('/login', async (request, response) => {
  try {
    // 1.
    const { email, password } = request.body
    // 2.
    if (!(email && password)) {
      return response.status(400).json({
        message: 'Utguudiig buren oruulna uu',
      })
    }
    // 3. User
    const user = await Users.findOne({ email: email })
    // 4.
    const isMatch = await bcrypt.compare(password, user?.password)
    if (user && isMatch) {
      const jwtBody = { user_id: user._id, email: email }
      const token = jwt.sign(jwtBody, 'MySuperDuperPrivateKey', {
        expiresIn: '24h',
      })
      return response.status(200).json({
        success: true,
        token: token,
      })
    }

    return response.status(400).json({
      success: false,
      status: 'Nuuts ug ner hoorondoo taarahgui bn',
    })
  } catch (error) {
    console.log(error)
    response.status(500).json({
      data: 'Aldaa garlaa',
      error: error,
    })
  }
})

adminRouter.post('/role/create', async (request, response) => {
  const { name } = request.body

  const result = await UserRole.create({ name })
  response.status(200).json({
    data: result,
  })
})
adminRouter.get('/role/list', async (request, response) => {
  const result = await UserRole.find({})
  response.status(200).json({
    data: result,
  })
})
module.exports = adminRouter
