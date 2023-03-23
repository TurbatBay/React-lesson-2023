const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide an Email'],
    unique: [true, 'Email Exists'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    unique: false,
  },
})

const Users = mongoose.model('Users', usersSchema)

module.exports = Users
