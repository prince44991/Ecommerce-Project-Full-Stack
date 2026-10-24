/** @format */

const User = require("../models/Usermodel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");
const { AuthUser } = require("../middleware/auth.js");

const Addcart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    console.log("USER ID:", userId);
    console.log("ITEM ID:", itemId);

    const userData = await User.findById(userId);

    console.log("USER DATA:", userData);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await User.findByIdAndUpdate(userId, { cartData: cartData }, { new: true });

    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      cartData,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getCartData = async (req, res) => {
  const userData = await User.findById(req.params.userId);

  if (!userData) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const cartData = userData.cartData || {};

  res.status(200).json({ cartData });
};

const removeFromCart = async (req, res) => {
  const { userId, itemId } = req.body;

  const userDatas = await User.findById(userId);

  if (!userDatas) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const cartData = userDatas.cartData || {};

  if (cartData[itemId]) {
    cartData[itemId] -= 1;
  }

  await User.findByIdAndUpdate(userId, { cartData });

  return res
    .status(201)
    .json({ success: true, message: "Item removed from cart", cartData });
};

module.exports = {
  Addcart,
  removeFromCart,
  getCartData,
};
//};
