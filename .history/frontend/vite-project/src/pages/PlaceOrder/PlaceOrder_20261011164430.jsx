import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
import axios from 'axios'

const PlaceOrder = () => {
  const { cartItems, food, getTotalAmount } = useContext(StoreContext)
  const subtotal = getTotalAmount()
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  })

 const url = `http://localhost:8001`
 const token = localStorage.getItem("token")

  const handformsubmit = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }
//error a raha hai PlaceOrder.jsx:69 Checkout error: {success: false, error: 'order validation failed: userId: Path `userId` is …s required., address: Path `address` is required.'}

  const placeorder = async (e) => {
  e.preventDefault();

  let orderItems = []
  food.map((item) => {
    if(cartItems[item._id] > 0){
      let iteminfo = item;
      iteminfo["quantity"] = cartItems[item._id]
      orderItems.push(iteminfo);
    }else{
      console.log("Item not in cart:", item.productname);
    }

    
  })
  let orderdata = {
    address:data,
    items:orderItems,
    amount:getTotalAmount(),
  }
  try {
    const response = await axios.post(
      "http://localhost:8001/order/placeorder",
      {
        ...orderdata,
        userId: token, // Include the userId in the request body  
      },

  
    );

  //}


  console.log("Checkout response:", response.data.data);


    if (response.data.data && response.data.data.url) {
      window.location.href = response.data.data.url;
    } else {
      alert(
        response.data.error || "Checkout session could not be created"
      );
    }

  } catch (error) {
    console.error(
      "Checkout error:",
      error.response?.data || error.message
    );

    alert(
      error.response?.data?.error || error.message
    );
  }

  }
  return (
    <main className="place-order-page">
      <header className="place-order-heading">
        <span className="place-order-eyebrow">ALMOST YOURS</span>
        <h1>Place your order</h1>
        <p>Enter your delivery details and review your cart total.</p>
      </header>

      <div className="place-order-layout">
        <section className="delivery-panel" aria-labelledby="delivery-heading">
          <div className="place-order-section-heading">
            <span className="place-order-step">01</span>
            <div>
              <h2 id="delivery-heading">Delivery information</h2>
              <p>Where should we deliver your order?</p>
            </div>
          </div>

          <form className="delivery-form" onSubmit={placeorder}>
            <div className="delivery-fields">
              <label className="delivery-field">
                <span>First name</span>
                <input name="firstName" value={data.firstName} onChange={handformsubmit}  type="text" autoComplete="given-name" placeholder="e.g. Alex" required />
              </label>
              <label className="delivery-field">
                <span>Last name</span>
                <input name="lastName" value={data.lastName} onChange={handformsubmit} type="text" autoComplete="family-name" placeholder="e.g. Morgan" required />
              </label>
              <label className="delivery-field delivery-field-wide">
                <span>Email address</span>
                <input name="email" value={data.email} onChange={handformsubmit}  type="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
              <label className="delivery-field delivery-field-wide">
                <span>Street address</span>
                <input name="street" value={data.street} onChange={handformsubmit} type="text" autoComplete="street-address" placeholder="House number and street name" required />
              </label>
              <label className="delivery-field">
                <span>City</span>
                <input name="city" value={data.city} onChange={handformsubmit} type="text" autoComplete="address-level2" placeholder="Your city" required />
              </label>
              <label className="delivery-field">
                <span>State</span>
                <input name="state" value={data.state} onChange={handformsubmit} type="text" autoComplete="address-level1" placeholder="Your state" required />
              </label>
              <label className="delivery-field">
                <span>ZIP code</span>
                <input name="zipCode" value={data.zipCode} onChange={handformsubmit} type="text" autoComplete="postal-code" placeholder="Postal code" required />
              </label>
              <label className="delivery-field">
                <span>Country</span>
                <input name="country" value={data.country} onChange={handformsubmit} type="text" autoComplete="country-name" placeholder="Your country" required />
              </label>
              <label className="delivery-field delivery-field-wide">
                <span>Phone number</span>
                <input name="phone" value={data.phone} onChange={handformsubmit} type="tel" autoComplete="tel" placeholder="+91 98765 43210" required />
              </label>
            </div>

            <div className="order-total-breakdown">
              <div className="order-total-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="order-total-row">
                <span>Delivery</span>
                <span className="order-total-free">FREE</span>
              </div>
              <div className="order-total-grand">
                <span>Total</span>
                <strong>₹{subtotal}</strong>
              </div>
            </div>

            <button className="place-order-submit" type="submit" disabled={subtotal <= 0}>
              Continue to payment
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        </section>

        <aside className="order-total-panel" aria-labelledby="order-total-heading">
          <div className="place-order-section-heading order-total-heading">
            <span className="place-order-step">02</span>
            <div>
              <h2 id="order-total-heading">Your order</h2>
              <p>Review items and total</p>
            </div>
          </div>

          <div className="order-total-items">
            {food.map((item) => {
              const quantity = cartItems[item._id] || 0
              if (quantity <= 0) return null

              return (
                <div className="order-total-item" key={item._id}>
                  <span className="order-total-item-name">
                    {item.productname}
                    <small>Qty {quantity}</small>
                  </span>
                  <span className="order-total-item-price">₹{item.price * quantity}</span>
                </div>
              )
            })}
            {Object.values(cartItems).every((quantity) => quantity <= 0) && (
              <p className="order-total-empty">Your cart is empty. Add an item before placing an order.</p>
            )}
          </div>

          <Link className="place-order-back" to="/cart">Back to cart</Link>
          <p className="place-order-secure">
            <i className="bi bi-lock-fill" aria-hidden="true"></i>
            Your information is kept private and secure.
          </p>
        </aside>
      </div>
    </main>
  )
}

export default PlaceOrder
