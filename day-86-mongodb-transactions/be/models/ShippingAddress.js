const mongoose = require('mongoose')
const ShippingAddressSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
  },
  {
    user_id: { type: String, ref: 'User' },
  }
)

const ShippingAddress = mongoose.model('ShippingAddress', ShippingAddressSchema)

module.exports = ShippingAddress
