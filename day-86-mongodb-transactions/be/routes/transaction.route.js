const { Router } = require('express')
const {
  createTransaction,
  createTransactionWithOutSession,
} = require('../controllers/transaction.controller')

const route = Router()

route.get('/shipping', createTransaction)
route.get('/shippingWithoutTransaction', createTransactionWithOutSession)

module.exports = route
