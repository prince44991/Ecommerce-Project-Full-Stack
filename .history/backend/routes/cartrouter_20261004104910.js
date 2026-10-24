/** @format */

const express = require("express");
const router = express.Router();
const { Addcart } = require("../controller/cartcontroller.js");

router.post("/addcart", Addcart);

module.exports = router;
