/** @format */

const User = require("../models/Usermodel.js");

const Addcart = async (req, res) => {
  try {
    const userData = await User.findOne({ _id: req.body.userId });

    const cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findByIdAndUpdate(req.body.userId, { cartData });

    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  Addcart,
};
