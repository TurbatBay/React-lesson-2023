const User = require('../models/User')
const ShippingAddress = require('../models/ShippingAddress')

//with session
exports.createTransaction = async (req, res) => {
  try {
    const session = await User.startSession()
    session.startTransaction()
    const user = await User.create(req.body.user, { session })
    const shippingAddress = await ShippingAddress.create(
      req.body.shippingAddress,
      { session }
    )
    await session.commitTransaction()
    session.endSession()
    res.json({ status: true, user, shippingAddress })
  } catch (error) {
    res.json({ status: false, error })
  }
}

//without session
exports.createTransactionWithOutSession = async (req, res) => {
  try {
    const user = await User.create(req.body.user)
    const shippingAddress = await ShippingAddress.create(
      req.body.shippingAddress
    )
    res.json({ status: true, user, shippingAddress })
  } catch (error) {
    res.json({ status: false, error })
  }
}
