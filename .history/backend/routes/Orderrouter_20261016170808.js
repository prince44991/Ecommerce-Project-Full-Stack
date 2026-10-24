/** @format */

const express = require("express");
const router = express.Router();
const {
  placeorder,
  verifyPayment,
  userOrder,
} = require("../controller/Ordercontroller.js");
const { AuthUser } = require("../middleware/auth.js");

router.post("/placeorder", AuthUser, placeorder);

router.post("/verifyorder", verifyPayment);

router.post("/userOrder", AuthUser, userOrder);

module.exports = router;
