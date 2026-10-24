/** @format */

const express = require("express");
const router = express.Router();
const { addProduct } = require("../controller/foodcontroller.js");

router.post("/add/product", addProduct);

module.exports = router;
