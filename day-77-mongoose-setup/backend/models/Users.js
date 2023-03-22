const { default: mongoose } = require('mongoose')

mongoose
let userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdOn: Date,
  modifiedOn: { type: Date, default: Date.now },
  lastLogin: Date,
})

userSchema.statics.findByUserName = function (userEmail) {
  return this.findByUserName({ email: userEmail }, '_id name email', {
    sort: 'modifiedOn',
  })
}

const User = mongoose.model('user', userSchema)

module.exports = User
