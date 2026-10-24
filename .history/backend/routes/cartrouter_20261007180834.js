/** @format */

const express = require("express");
const router = express.Router();
const {
  Addcart,
  removeFromCart,
  getCartData,
} = require("../controller/cartcontroller.js");

const { AuthUser } = require("../middleware/auth.js");

router.post("/addcart", AuthUser, Addcart);

router.post("/removefromcart", removeFromCart);

router.get("/getcart/:userId", AuthUser, getCartData);

module.exports = router;
