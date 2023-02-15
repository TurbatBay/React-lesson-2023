// Log a message indicating that the script is running
console.log('Day - 62 -- User Login CRUD')

// Import necessary modules
const express = require('express')  // Web framework for Node.js
const cors = require('cors')        // Middleware to enable CORS in Express
const fs = require('fs')            // File system module

// Create an instance of Express
const app = express()

// Set the port number for the server
const PORT = 8080

// Enable CORS for all routes
app.use(cors())

// Parse incoming JSON data
app.use(express.json())

// Define an API route for user registration
app.post('/register', (request, response) => {
  const body = request.body
  console.log(body)

  // Read user data from file
  fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file not found',
        data: [],
      })
    }

    // Parse the user data
    const readDataObj = JSON.parse(readData)

    // Add the new user to the user data array
    readDataObj.push(body)

    // Read user role data from file
    fs.readFile('./data/usersrole.json', 'utf-8', (readError, readData) => {
      if (readError) {
        response.json({
          status: 'file read error',
          data: [],
        })
      }

      // Parse the user role data
      const roleData = JSON.parse(readData)

      // Find the user's role by ID
      const roleName = roleData.filter((role) => role.id === body.role)[0]

      // Create a new user object with the role information
      const userData = {
        ...body,
        role: roleName,
      }

      // Add the new user object to the user data array
      readDataObj.push(userData)

      // Write the updated user data to file
      fs.writeFile(
        './data/users.json',
        JSON.stringify(readDataObj),
        (writeError) => {
          if (writeError) {
            response.json({
              status: 'file write error',
            })
          }
          response.json({
            status: 'success',
            data: readDataObj,
          })
        }
      )
    })
  })
})

// Define an API route to get all users
app.get('/users', (request, response) => {
  // Read user data from file
  fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file read error',
        data: [],
      })
    }
    response.json({
      status: 'success',
      data: JSON.parse(readData),
    })
  })
})

// Define an API route to get all user roles
app.get('/users/roles', (request, response) => {
  // Read user role data from file
  fs.readFile('./data/usersrole.json', 'utf-8', (readError, readData) => {
    if (readError) {
      response.json({
        status: 'file does not exist',
      })
    }
    response.json({
      status: 'success',
      data: JSON.parse(readData),
    })
  })
})

// Define an API route for user login
app.post('/login', (request, response) => {
  const body = request.body
  console.log(body)

  // Read user data from file
  fs.readFile('./data/users.json', 'utf-8', (readError, readData
