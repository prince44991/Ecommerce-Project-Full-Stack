/** @format */

const Stripe = require("stripe");

const stripe = Stripe(process.env.PAYMENT_SECRECTKEY);

const Order = require("../models/Ordermodel.js");

const frontend_url = "http://localhost:5173";

const placeorder = async (req, res) => {
  try {
    const { items } = req.body;

    const userorder = new Order({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await userorder.save();
    await Order.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Check items
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        error: "Items array is required",
      });
    }

    // Create Stripe line items
    const lineItems = items.map((item) => {
      if (
        !item.name ||
        !Number.isFinite(Number(item.price)) ||
        Number(item.price) <= 0 ||
        !Number.isInteger(Number(item.quantity)) ||
        Number(item.quantity) <= 0
      ) {
        throw new Error("Invalid product name, price, or quantity");
      }

      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: Number(item.quantity),
      };
    });

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      //payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${frontend_url}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontend_url}/cancel`,
    });

    // Send checkout URL
    return res.status(200).json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message || "Failed to create checkout session",
    });
  }
};

module.exports = { placeorder };
