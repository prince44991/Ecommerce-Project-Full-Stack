/** @format */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addProduct,
  viewallProduct,
  removeProduct,
} = require("../controller/foodcontroller.js");

//image section upload
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/add/product", upload.single("image"), addProduct);

router.get("/view/product", viewallProduct);

router.post("/delete/product", removeProduct);

module.exports = router;
