console.log('Day - 82 - Authorize with JWT')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const adminRouter = require('./routes/Admin-api')
const apiRouter = require('./routes/Api')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
app.use(express.json())
app.use(cors())
app.use('/admin', adminRouter)
app.use('/api', apiRouter)
app.get('/', (request, response) => {
  response.send(`<h1>Day - 81:</h1>`)
})

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected succesfully'))
    .catch((error) => console.error(error))
  console.log(`Express is running on listening on http://localhost:${PORT}`)
})
