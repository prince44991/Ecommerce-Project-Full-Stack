/** @format */

const jwt = require("jsonwebtoken");
//import jwt from "jsonwebtoken";

const AuthUser = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRECT_KEY);

    console.log("Decoded JWT =", decoded);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

//export default authMiddleware;
module.exports = {
  AuthUser,
};
