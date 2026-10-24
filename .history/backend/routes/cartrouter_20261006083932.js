/** @format */

const express = require("express");
const router = express.Router();
const { Addcart, removeFromCart } = require("../controller/cartcontroller.js");

router.post("/addcart", Addcart);

router.post("/removefromcart", removeFromCart);

module.exports = router;
