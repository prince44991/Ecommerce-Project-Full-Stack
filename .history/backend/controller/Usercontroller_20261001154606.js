/** @format */

const User = require("../models/Usermodel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ scuess: false, message: "User Doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ scuess: false, message: "password wrong" });
    }

    return res
      .status(200)
      .json({ scuess: true, message: "User scuessfulley Login" });
  } catch (error) {
    console.log(error);
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRECT_KEY);
};

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res
        .status(201)
        .json({ scuess: false, message: "User already exist" });
    }
    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ scuess: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res
        .status(401)
        .json({ scuess: false, message: "Please Storng password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newuser = new User({
      name: name,
      email: email,
      password: hashpassword,
    });

    const user = await newuser.save();

    const token = createToken(user._id);
    res.status(201).json({ scuess: true, message: "User add", data: token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  signupUser,
  loginUser,
};
