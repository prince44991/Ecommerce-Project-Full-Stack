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
  const userData = await User.findById({ _id: req.body.userId });
  const cartData = await userData.cartData;

  if (!cartData[itemId]) {
    cartData[itemId] = 1;
  } else {
    cartData[itemId] += 1;
  }

  await User.findOneAndUpdate(req.body.userId, { cartData });

  res.status(201).json({ scucess: true, message: "Add cart ok..", cartData });
};

const removeFromCart = async (req, res) => {
  const { userId, itemId } = req.body;

  const userdata = await User.findById(userId);

  if (!userdata) {
    return res.status(404).json({ message: "User not found" });
  }

  const cartData = userdata.cartData || {};

  if (cartData[itemId]) {
    delete cartData[itemId];
  } else {
    return res.status(404).json({ message: "Item not found in cart" });
  }

  await User.findByIdAndUpdate(userId, {
    cartData: cartData,
  });

  res.status(200).json({ message: "Item removed from cart", cartData });
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
