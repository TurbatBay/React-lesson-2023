console.log('Day - 77 - Mongoose setup')

const { application, Router } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const apiRouter = require('./routes/api')
const PORT = 8080
const MONGO_CONNECTION_STRING =
  'mongodb+srv://MongoTuru:FiB5EOYzWksXP4S7@turumongo.pfftwk3.mongodb.net/test' //ene cloud deer haana bairlahiig zaaj ugnu (test dotor mini data orson bga)
const app = express()

app.use(express.json())
app.use(apiRouter)
mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.error(error))

app.get('/', (request, response) => {
  response.send('<h1> DAY - 77 - Mongoose App </h1>')
})

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error(error))

  console.log(`Express Application is running on http://localhost:${PORT}`)
})
