/** @format */

const express = require("express");
const router = express.Router();
const { Addcart } = require("../controller/cartcontroller.js");

router.post("/cart/addcart", Addcart);

module.exports = router;
