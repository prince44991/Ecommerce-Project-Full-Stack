/** @format */

const Order = require("../models/Ordermodel.js");
const Stripe = require("stripe");

const stripe = new Stripe(process.env.PAYMENT_SECRECTKEY);

const frontend_url = "http://localhost:5153";

const placeOrder = async (req, res) => {
  try {
    const userorder = new Order({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await userorder.save();
    await userorder.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.session.create({
      line_items: line_items,
      mode: "Payment",
      scuess_url: `${frontend_url}/ verify?success=true&orderId=${userorder._id}`,
      cancel_url: `${frontend_url}/ verify?success=false&orderId=${userorder._id}`,
    });

    res.json({ scuess: true, session_url: session.url });
  } catch (error) {}
};

module.exports = {
  placeOrder,
};
