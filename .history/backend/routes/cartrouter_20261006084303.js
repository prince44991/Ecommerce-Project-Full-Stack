/** @format */

const express = require("express");
const router = express.Router();
const {
  Addcart,
  removeFromCart,
  getCartData,
} = require("../controller/cartcontroller.js");

router.post("/addcart", Addcart);

router.post("/removefromcart", removeFromCart);

router.get("/getcart/:userId", getCartData);

module.exports = router;
