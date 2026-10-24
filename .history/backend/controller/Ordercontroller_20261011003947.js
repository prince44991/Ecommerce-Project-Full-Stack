/** @format */

const Order = require("../models/Ordermodel.js");
const User = require("../models/Usermodel.js");
const Food = require("../models/foodmodel.js");
const Stripe = require("stripe");

const frontend_url = "http://localhost:5153";

const placeOrder = async (req, res) => {
  try {
    const stripeSecretKey = process.env.PAYMENT_SECRECTKEY;
    if (!stripeSecretKey) {
      return res.status(500).json({
        success: false,
        message: "Payment configuration is missing.",
      });
    }

    if (!req.body.address || typeof req.body.address !== "object") {
      return res.status(400).json({
        success: false,
        message: "Delivery address is required.",
      });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const cartData = user.cartData || {};
    const cartEntries = Object.entries(cartData).filter(
      ([, quantity]) => Number(quantity) > 0,
    );
    if (cartEntries.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Your cart is empty.",
      });
    }

    const products = await Food.find({
      _id: { $in: cartEntries.map(([productId]) => productId) },
    });
    if (products.length !== cartEntries.length) {
      return res.status(400).json({
        success: false,
        message: "One or more cart items are no longer available.",
      });
    }

    const items = products.map((product) => ({
      productId: product._id,
      name: product.productname,
      price: product.price,
      quantity: Number(cartData[product._id.toString()]),
    }));
    const amount = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const userorder = new Order({
      userId: req.userId,
      items,
      amount,
      address: req.body.address,
    });
    const line_items = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const stripe = new Stripe(stripeSecretKey);
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/cart?payment=success`,
      cancel_url: `${frontend_url}/PlaceOrder?payment=cancelled`,
      metadata: { orderId: userorder._id.toString() },
    });

    await userorder.save();
    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing the order.",
    });
  }
};

module.exports = {
  placeOrder,
};
