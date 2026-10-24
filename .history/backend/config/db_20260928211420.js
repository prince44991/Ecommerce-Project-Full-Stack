/** @format */

const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/NoteApp")
    .then(() => console.log("mongodb connect....."));
  // .catch(console.log(Error));
};

module.exports = connectdb;
