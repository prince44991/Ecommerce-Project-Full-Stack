/** @format */

const Food = require("../models/foodmodel.js");

const addProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Please upload an image" });
    }

    let image_filname = req.file.filename;

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

const userViewProduct = async (req, res) => {
  try {
    const userid = req.params.id;
    const Product = await Food.findById(userid);

    if (!Product) {
      res.status(401).json({ msg: "not product..." });
    }

    return res.status(200).json({ msg: "ok", data: Product });
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

//search
const SearchProduct = async (req, res) => {
  try {
    const query = req.query.q;

    const result = await Food.find({
      productname: { $regex: query, $options: "i" },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProduct,
  viewallProduct,
  removeProduct,
  userViewProduct,
  SearchProduct,
};
