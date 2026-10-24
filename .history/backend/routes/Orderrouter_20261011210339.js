/** @format */

const express = require("express");
const router = express.Router();
const {
  placeorder,
  verifyPayment,
} = require("../controller/Ordercontroller.js");
const { AuthUser } = require("../middleware/auth.js");

router.post("/placeorder", AuthUser, placeorder);

router.post("/verifyorder", verifyPayment);

module.exports = router;
