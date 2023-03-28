const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const ProductRoute = require('./routes/product.route')
const TransactionRoute = require('./routes/transaction.route')
const CategoryRoute = require('./routes/category.route')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())

app.use('/product', ProductRoute)
app.use('/category', CategoryRoute)
app.use('/transaction', TransactionRoute)
app.get('/', (req, res) => {
  res.send(`<h1>Day - 86 - Transactions</h1>`)
})

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log('Database connected succesfully'))
    .catch((error) => console.error(error))
  console.log(`Express is running on listening on http://localhost:${PORT}`)
})
