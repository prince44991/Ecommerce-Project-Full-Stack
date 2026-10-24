import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, text = 'New Arrival' }) => {

  const {cartItems,setCartItems,addcart,removecart} = useContext(StoreContext)
  
  
  
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
          <button type="button" onClick={console.log(addcart(id))} className="food-btn primary">
            Add to Cart
          </button>
          <button type="button" className="food-btn secondary">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
