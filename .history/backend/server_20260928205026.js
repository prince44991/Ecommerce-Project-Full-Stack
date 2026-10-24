/** @format */

const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db.js");
const foodRouter = require("./routes/foodrouter.js");
const app = express();

const PORT = 8001;

app.use(express.json());
app.use(cors());
app.use("/", foodRouter);
connectdb();

app.listen(PORT, () => {
  console.log("Server running at http://localhost:PORT");
});
