/** @format */

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    item: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Food Procesing" },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const orderModel = mongoose.model("order", OrderSchema);

module.exports = orderModel;
