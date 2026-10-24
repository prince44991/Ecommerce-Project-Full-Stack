/** @format */

const User = require("../models/Usermodel.js");

const Addcart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.body.userId });
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await User.findOneAndUpdate({ req.body.userId }, { cartData });

    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  Addcart,
};
