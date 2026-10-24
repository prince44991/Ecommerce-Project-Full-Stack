import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,Img,addCart,removecart} = useContext(StoreContext)
  return (
    <main className="cart-page">
      <header className="cart-heading">
        <span className="cart-eyebrow">YOUR ORDER</span>
        <h1>Your cart</h1>
        <p>Good food is just a few steps away.</p>
      </header>
      <section className="cart-panel" aria-label="Cart items">
        <div className="cart-columns" aria-hidden="true">
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Action</span>
        </div>
        <div className="cart-items">
       {Img.map((item,index) => {
         if(cartItems[item.id]>0){
            return(
              <div className="cart-item" key={item.id}>
                <div className="cart-product">
                  <img src={item.image} alt={item.text}/>
                  <p>{item.text}</p>
                </div>
                <p className="cart-unit-price"><span className="mobile-label">Price</span>₹{item.price}</p>
                <p className="cart-quantity"><span className="mobile-label">Quantity</span>{cartItems[item.id]}</p>
                <p className="cart-line-total"><span className="mobile-label">Total</span>₹{item.price*cartItems[item.id]}</p>
                <button className="cart-remove" type="button" aria-label={`Remove one ${item.text} from cart`} onClick={() => removecart(item.id)}>
                  <i className="bi bi-trash3" aria-hidden="true"></i>
                  <span>Remove</span>
                </button>
              </div>
            )
         }
       })}
        </div>
      </section>
      <aside className="cart-summary" aria-label="Order subtotal">
        <span className="cart-summary-label">ORDER SUMMARY</span>
        <div className="cart-subtotal-row">
          <span>Subtotal</span>
          <strong>₹{Img.reduce((subtotal, item) => subtotal + (cartItems[item.id] > 0 ? item.price * cartItems[item.id] : 0), 0)}</strong>
        </div>
        <p>Delivery and taxes calculated at checkout</p>
      </aside>
    </main>
  )
}

export default Cart
