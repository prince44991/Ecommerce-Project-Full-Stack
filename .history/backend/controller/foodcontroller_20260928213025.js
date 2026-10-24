/** @format */

const Food = require("../models/foodmodel.js");

const addProduct = async (req, res) => {
  try {
    let image_filname = `${req.file.filename}`;

    const { name, image, price, catagory } = req.body;

    const foodadd = await Food.create({
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

const viewallProduct = async (req, res) => {
  try {
    const viewProduct = await Food.find({});

    res.status(201).json({ message: "all item", data: viewProduct });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProduct,
  viewallProduct,
};
