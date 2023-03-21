const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Todo', todoSchema)
