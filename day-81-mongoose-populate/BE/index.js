console.log('Day 81 - INSERT/UPDATE/DELETE MANY')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const todoRouter = require('./routes/todo-routes')
const app = express()
const PORT = 8081
const categoryRouter = require('./routes/category-routes')
const MONGO_CONNECTION_STRING =
  'mongodb+srv://MongoTuru:helloworld@turumongo.pfftwk3.mongodb.net/test'
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Day 81 - INSERT/UPDATE/DELETE MANY</h1>')
})
app.use('/todo', todoRouter)
app.use('/category', categoryRouter)
app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected successfully'))
    .catch((error) => console.error(error))

  console.log(`Express is running on listening on http://localhost:${PORT}`)
})
