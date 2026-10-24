import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, text = 'New Arrival' }) => {
  const { cartItems, addCart, removecart } = useContext(StoreContext)
  // const quantity = cartItems[id] || 0
  // console.log(quantity)

  return (
    <div className="food-card" key={id}>
      <div className="food-image-wrap">
        <img src={image} alt={name} className="food-image" />
        <span className="food-badge">{text}</span>
      </div>

      <div className="food-content">
        <div className="food-header">
          <h3>{name}</h3>
          <span className="food-price">₹{price}</span>
        </div>

        <p className="food-description">{description}</p>

        <div className="food-actions">
          {!cartItems[id] ? 
            
            <button type="button" onClick={() => addCart} className="food-btn primary">
              <i className="bi bi-bag-plus" aria-hidden="true"></i>
              <span>Add to cart</span>
            </button>  : 
              
              <button type="button" className="qty-btn" onClick={() => removecart(id)}>
                <i className="bi bi-dash" aria-hidden="true"></i>
                <span className="visually-hidden">Add one </span>
              </button>
              <span className="qty-value">{cartItems[id]}</span>
              <button type="button" className="qty-btn" onClick={() => addCart(id)}>
                <i className="bi bi-plus" aria-hidden="true"></i>
                <span className="visually-hidden">Add One{name}</span>
              </button>
            
              
          
          }
            {/* </div> */}
            

          <button type="button" className="food-btn secondary" aria-label={`Add ${name} to wishlist`}>
            <i className="bi bi-heart" aria-hidden="true"></i>
            <span>Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
