/** @format */

const express = require("express");
const router = express.Router();
const { placeorder } = require("../controller/Ordercontroller.js");
//const { AuthUser } = require("../middleware/auth.js");

router.post("/placeorder", placeorder);

module.exports = router;
