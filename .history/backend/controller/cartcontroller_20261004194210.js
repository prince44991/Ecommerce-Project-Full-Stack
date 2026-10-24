/** @format */

const User = require("../models/Usermodel.js");

const Addcart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product already exists in the cart
    const existingProductIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update the quantity
      user.cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.json({ success: true, message: "Product added to cart" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  Addcart,
};
