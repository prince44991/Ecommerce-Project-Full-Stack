import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = ({id}) => {
  const {cartItems,food,addCart,removecart,getTotalAmount} = useContext(StoreContext)
  return (
    <main className="cart-page">
      <header className="cart-heading">
        <span className="cart-eyebrow">YOUR ORDER</span>
        <h1>Your cart</h1>
        <p>Good food is just a few steps away.</p>
      </header>
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-8">
          <section className="cart-panel" aria-label="Cart items">
            <div className="cart-columns" aria-hidden="true">
              <span>Item</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Action</span>
            </div>  
            <div className="cart-items">
              {food.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div className="cart-item" key={item._id}>
                      <div className="cart-product">
                        <img src={`http://localhost:8001/uploads/${item.image}`} alt={item.text} />
                        <p>{item.text}</p>
                      </div>
                      <p className="cart-unit-price"><span className="mobile-label">Price</span>₹{item.price}</p>
                      <p className="cart-quantity"><span className="mobile-label">Quantity</span>{cartItems[item._id]}</p>
                      <p className="cart-line-total"><span className="mobile-label">Total</span>₹{item.price * cartItems[item._id]}</p>
                      <button className="cart-remove" type="button" aria-label={`Remove one ${item.text} from cart`} onClick={() => removecart(item._id)}>
                        <i className="bi bi-trash3" aria-hidden="true"></i>
                        <span>Remove</span>
                      </button>
                    </div>
                  )
                }
                return null
              })}
            </div>
          </section>
        </div>
        <div className="col-12 col-lg-4">
          <aside className="bg-white border rounded-4 shadow-sm p-3 p-md-4" aria-label="Order summary">
            <h2 className="h5 fw-bold mb-4">Order Summary</h2>
            <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
              <span className="text-body-secondary">Subtotal</span>
              <span className="fw-medium">{getTotalAmount(id)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
              <span className="text-body-secondary">Discount</span>
              <span className="fw-medium">-₹200</span>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
              <span className="text-body-secondary">Delivery</span>
              <span className="text-success fw-semibold">FREE</span>
            </div>
            <hr className="my-3" />
            <div className="d-flex justify-content-between align-items-center gap-2 mb-4">
              <span className="fw-semibold">Total</span>
              <span className="fs-4 fw-bold">{getTotalAmount()-200}</span>
            </div>
            <button className="btn btn-dark w-100 py-2 fw-semibold" type="button">
              Proceed to Checkout
            </button>
            <p className="d-flex justify-content-center align-items-center gap-2 mt-3 mb-0 small text-body-secondary">
              <i className="bi bi-lock-fill" aria-hidden="true"></i>
              Secure checkout
            </p>
          </aside>
        </div>
      </div>
     
    </main>
  )
}

export default Cart
