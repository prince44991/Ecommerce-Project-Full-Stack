/** @format */

const Food = require("../models/foodmodel.js");

const addProduct = async (req, res) => {
  try {
    let image_filname = `${req.file.filename}`;

    const foodadd = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      catagory: req.body.catagory,
      image: image_filname,
    });

    res.status(201).json({
      message: "add item",
      data: foodadd,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProduct };
