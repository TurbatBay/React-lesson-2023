const { default: mongoose } = require('mongoose')

mongoose
let userShema = new mongoose.Schema({
  name: String,
  email: String,
  createOn: Date,
})

const User = mongoose.model('user', userShema)

module.exports = User
