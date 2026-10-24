/** @format */

const User = require("../models/Usermodel.js");

const Addcart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.user);
    let cartData = userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await User.findByIdAndUpdate(req.body.user, { cartData });
    res.json({ success: true, message: "add to cart" });
    // const userdata = await User.findById(req.body.user.id)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  Addcart,
};
