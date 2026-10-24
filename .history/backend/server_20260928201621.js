/** @format */

const express = require("express");
const cors = require("cors");
const { connectdb } = require("./config/db.js");
const app = express();

const PORT = 8001;

app.use(express.json());
app.use(cors());
connectdb();

app.listen(PORT, () => {
  console.log("Server running at http://localhost:PORT");
});
