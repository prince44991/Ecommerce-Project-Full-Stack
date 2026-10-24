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
  const userData = await User.findById(req.body.userId);

  const cartData = userData.cartData || {};

  if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
    cartData[req.body.itemId] -= 1;
  }

  await User.findByIdAndUpdate(req.body.userId, { cartData: cartData });

  res.json({ success: true, message: "Item removed from cart successfully" });
};

module.exports = {
  Addcart,
  removeFromCart,
  //getCartData,
};
//};
