const Product = require('../models/Product')
const User = require('../models/User')

exports.createProduct = async (req, res) => {
  try {
    const session = await User.startSession()
    session.startTransaction()
    const product = await Product.updateOne(
      {
        _id: '',
      },
      {
        $inc: { quantity: -2 },
      },
      {
        session,
      }
    )

    // const product = await Product.create(req.body)
    console.log('product created')
    res.json({ status: true, product })
  } catch (error) {
    res.json({ status: false, error })
  }
}
