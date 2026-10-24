/** @format */

const User = require("../models/Usermodel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");
//const { AuthUser } = require("../middleware/auth.js");

const Addcart = async (req, res) => {
  let userData = await User.findById(req.body.userId);
  let cartData = (await userData.cartData) || {};

  if (cartData[req.body.itemId]) {
    cartData[req.body.itemId] += 1;
  } else {
    cartData[req.body.itemId] = 1;
  }

  await User.findByIdAndUpdate(req.body.userId, { cartData: cartData });

  res.json({ success: true, message: "Item added to cart successfully" });
};

const removeFromCart = async (req, res) => {
  try {
  const userData = await User.findById(req.body.userId);

  const cartData = await userData.cartData;

  if (cartData[req.body.itemId] > 0) {
    cartData[req.body.itemId] -= 1;
  } else {
    return res.json({ success: false, message: "Item not in cart" });
  }

  await User.findByIdAndUpdate(req.body.userId, { cartData: cartData });

  res.json({ success: true, message: "Item removed from cart successfully" });
} catch (error) {
  console.error("Error removing item from cart:", error);
  res.status(500).json({ success: false, message: "Internal server error" });
};

const getCartData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = await User.findById(userId);

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = await userData.cartData;

    res.json({ success: true, cartData: cartData });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
module.exports = {
  Addcart,
  removeFromCart,
  getCartData,
};
//};
