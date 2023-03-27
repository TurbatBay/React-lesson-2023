console.log('Day - 85 -- geospacial')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const restaurantApi = require('./routes/restaurants.routes')

const app = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
app.use(express.json())
app.use(cors())

app.use('/restaurant', restaurantApi)

app.get('/', (request, response) => {
  response.send(`<h1>Day - 85 -- geospacial:</h1>`)
})

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected succesfully'))
    .catch((error) => console.error(error))
  console.log(`Express is running on listening on http://localhost:${PORT}`)
})
