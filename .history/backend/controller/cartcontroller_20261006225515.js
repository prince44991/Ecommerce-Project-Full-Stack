/** @format */

const User = require("../models/Usermodel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");

// const Addcart = async (req, res) => {
//   try {
//     const { userId, itemId } = req.body;
//     const userData = await User.findById(userId);

//     if (!userData) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found" });
//     }

//     const cartData = userData.cartData || {};

//     if (!cartData[itemId]) {
//       cartData[itemId] = 1;
//     } else {
//       cartData[itemId] += 1;
//     }

//     await User.findByIdAndUpdate(userId, { cartData: cartData }, { new: true });

//     res
//       .status(200)
//       .json({ success: true, message: "Item added to cart", cartData });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

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
    return res.status(404).json({ message: "User not found" });
  }

  const cartData = userData.cartData || {};

  res.status(200).json({ cartData });
};

module.exports = {
  Addcart,
  removeFromCart,
  getCartData,
};
//};
