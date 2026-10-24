/** @format */

const Food = require("../models/foodmodel.js");

const addProduct = async (req, res) => {
  try {
    let image_filname = `${req.file.filename}`;

    const { productname, image, price, catagory } = req.body;

    const foodadd = await Food.create({
      productname: req.body.productname,
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

const removeProduct = async (req, res) => {
  try {
    const produts = await Food.findById(req.body.id);

    const productdel = await Food.findByIdAndDelete(produts);

    res.status(201).json({
      message: "delete item",
      data: productdel,
    });

    res.status(201).json({ message: "all item", data: viewProduct });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProduct,
  viewallProduct,
  removeProduct,
};
