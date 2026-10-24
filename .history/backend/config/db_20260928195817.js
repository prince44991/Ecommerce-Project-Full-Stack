/** @format */

const mongoose = require("mongoose");

export const connectdb = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/ShoesApp")
    .then(() => console.log("mongodb connect....."))
    .catch(console.log(Error));
};
