/** @format */

const User = require("../models/Usermodel.js");

const Addcart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await User.findById(userId);

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await User.findByIdAndUpdate(userId, { cartData }, { new: true });

    res
      .status(200)
      .json({ success: true, message: "Item added to cart", cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  Addcart,
};
