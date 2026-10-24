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
    const authorization = req.headers.authorization;
    const token = authorization?.startsWith("Bearer ")
      ? authorization.slice(7)
      : null;

    if (!token) {
      return res.status(401).json({ success: false, message: "Please log in" });
    }

    let userId;
    try {
      const decoded = jwt.verify(token, process.env.SECRECT_KEY);
      userId = decoded.id;
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid login token" });
    }

    const { itemId } = req.body || {};

    if (itemId === undefined || itemId === null || itemId === "") {
      return res
        .status(400)
        .json({ success: false, message: "itemId is required" });
    }

    const userData = await User.findById(userId);

    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const cartData = { ...(userData.cartData || {}) };
    cartData[itemId] = (cartData[itemId] || 0) + 1;

    userData.cartData = cartData;
    await userData.save();

    return res
      .status(200)
      .json({ success: true, message: "Item added to cart", cartData });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
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
