/** @format */

const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db.js");
const foodRouter = require("./routes/foodrouter.js");
const UserRouter = require("./routes/Userrouter.js");
const cartRouter = require("./routes/cartrouter.js");
const orderRouter = require("./routes/Orderrouter.js");
require("dotenv").config();
const app = express();

const PORT = 8001;

app.use(express.json());
app.use(cors());
app.use("/", foodRouter);
app.use("/user", UserRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/uploads", express.static("uploads"));

connectdb();

app.listen(PORT, () => {
  console.log("Server running at http://localhost:PORT");
});
