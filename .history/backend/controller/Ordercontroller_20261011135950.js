/** @format */

const Order = require("../models/Ordermodel.js");
const User = require("../models/Usermodel.js");
const Food = require("../models/foodmodel.js");
const Stripe = require("stripe");

const frontend_url = "http://localhost:5153";

const placeOrder = async (req, res) => {
  try {
    const { items } = req.body; // Expecting an array of items from frontend
    //const userid = req.user; // Assuming you have user authentication middleware that sets req.user

    // Fetch user details from the database
    //const user = await User.findById(userid);

    // Map your cart items to Stripe's line_items format
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          images: [item.image], // Optional
        },
        unit_amount: item.price * 100, // Stripe expects amount in cents (e.g., ₹10.00 = 1000)
      },
      quantity: item.quantity,
    }));

    const session = await Stripe(
      process.env.PAYMENT_SECRECTKEY,
    ).checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment", // Use 'subscription' for recurring plans
      success_url: `${frontend_url}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontend_url}/cancel.html`,
    });

    // Return the session URL to the frontend
    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  placeOrder,
};
