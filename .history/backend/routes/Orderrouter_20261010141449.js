/** @format */

const express = require("express");
const router = express.Router();
const { placeOrder } = require("../controller/Ordercontroller.js");

router.post("/placeorder", placeOrder);
module.exports = router;
