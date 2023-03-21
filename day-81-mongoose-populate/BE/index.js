console.log('Day 81 - INSERT/UPDATE/DELETE MANY')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const app = express()
const PORT = 8081
const MONGO_CONNECTION_STRING =
  'mongodb+srv://MongoTuru:helloworld@turumongo.pfftwk3.mongodb.net/test'
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Day 81 - INSERT/UPDATE/DELETE MANY</h1>')
})

app.get('/list', async (request, response) => {
  const result = await Todo.find({})

  response.status(200).json({
    data: result,
  })
})

app.post('/create', async (request, response) => {
  const body = request.body

  const result = await Todo.insertMany(body)

  response.status(200).json({
    data: result,
  })
})

app.put('/update', async (request, response) => {
  const body = request.body
  console.log(body[0].checked)
  console.log(body[1].checked)
  // const result = await Todo.updateMany(body[0])

  const result = await Todo.updateMany(
    { name: body[1].name },
    { $set: { checked: body[0].checked } }
  )
  response.status(200).json({
    data: result,
  })
})

app.delete('/delete', async (request, response) => {
  const body = request.body
  const result = await Todo.deleteMany(body)
  response.status(200).json({
    data: [],
  })
})

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error(error))

  console.log(`Express is running on listening on http://localhost:${PORT}`)
})
