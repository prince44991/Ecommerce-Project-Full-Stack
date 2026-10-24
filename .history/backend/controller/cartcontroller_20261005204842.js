/** @format */

const User = require("../models/Usermodel.js");

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
    const userData = await User.findOne({ _id: req.body.userId });
    const cartData = userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(201).json({ success: true, message: "addcart is ok" });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = {
  Addcart,
};
