/** @format */

const User = require("../models/Usermodel.js");

const Addcart = async (req, res) => {
  try {
    const { userId, itemId } = req.body ?? {};
    if (!userId || !itemId) {
      return res
        .status(400)
        .json({ success: false, message: "userId and itemId are required" });
    }

    const userData = await User.findById(userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = { ...(userData.cartData || {}) };
    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await User.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Item added to cart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  Addcart,
};
