/** @format */

const Stripe = require("stripe");

const stripe = Stripe(process.env.PAYMENT_SECRECTKEY);

const Order = require("../models/Ordermodel.js");

const frontend_url = "http://localhost:5173";

const placeorder = async (req, res) => {
  try {
    //const { items } = req.body;
    const userId = req.userId || req.user?._id || req.user; // Get userId from request body

    const { amount, address, items } = req.body;

    const userorder = new Order({
      userId: userId,
      items: items,
      amount: amount,
      address: address,
    });

    await userorder.save();
    await Order.findByIdAndUpdate(userId, { cartData: {} });

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
        !item.productname ||
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
            name: item.productname,
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

const verifyPayment = async (req, res) => {
  const { orderId, scuess } = req.body;

  try {
    if (scuess === "true") {
      await Order.findByIdAndUpdate(orderId, { payment: true });
      res.json({ scuess: true, message: "Paid" });
    } else {
      await Order.findByIdAndDelete(orderId);
      res.json({ scuess: false, message: "Not Paid" });
    }
  } catch (error) {
    res.json({ message: "error backend", error });
  }
};

module.exports = { placeorder, verifyPayment };
