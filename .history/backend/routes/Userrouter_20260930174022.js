/** @format */

const express = require("express");
const router = express.Router();

const { signupUser } = require("../controller/Usercontroller.js");

router.post("/signup", signupUser);

module.exports = router;
