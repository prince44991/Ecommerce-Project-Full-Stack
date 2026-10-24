import React, { useContext, useEffect, useState } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const FoodItem = ({ id, name, price, description, image, text = 'New Arrival', rating = 4.8, reviews = 128 }) => {
  const { cartItems, addCart, removecart } = useContext(StoreContext)
  // const quantity = cartItems[id] || 0
  // console.log(quantity)
  const [data,setData] = useState([])

  
  const fetchapicall = async () => {

    const url = "http://localhost:8001"

    const response = await axios.get(`${url}/view/product`)
    console.log(response.data.data)
    setData(response.data.data)

  }

  

 
  // useEffect(() => {
  //    fetchapicall()
  // },[])

  return (

      <>
    {data.map((item,index) => {
       return(
     <div className="food-card" key={item._id}>
      <div className="food-image-wrap">
        <img src={`http://localhost:8001/uploads/${item.image}`} alt={item.name} className="food-image" />
        <span className="food-badge">{item.text}</span>
      </div>

      <div className="food-content">
        <div className="food-header">
          <h3>{item.name}</h3>
          <span className="food-price">₹{item.price}</span>
        </div>

        <div className="food-rating" aria-label={`${rating} out of 5 stars from ${reviews} reviews`}>
          <span className="rating-stars" aria-hidden="true">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
          </span>
          <strong>{rating}</strong>
          <span>({reviews})</span>
        </div>

        <p className="food-description">{item.description}</p>

        <div className="food-actions">
          {!cartItems[id] ? 
            
            <button type="button" onClick={() => addCart(id)} className="food-btn primary">
              <i className="bi bi-bag-plus" aria-hidden="true"></i>
              <span>Add to cart</span>
            </button>  : 
              
              <>
              <button type="button" className="qty-btn" onClick={() => removecart(id)}>
                <i className="bi bi-dash" aria-hidden="true"></i>
                <span className="visually-hidden">Add one </span>
              </button>
              <span className="qty-value">{cartItems[id]}</span>
              <button type="button" className="qty-btn" onClick={() => addCart(id)}>
                <i className="bi bi-plus" aria-hidden="true"></i>
                <span className="visually-hidden">Add One{name}</span>
              </button>
            </>
              
          
          }
            
            

          <button type="button" className="food-btn secondary" aria-label={`Add ${name} to wishlist`}>
            <i className="bi bi-heart" aria-hidden="true"></i>
            <span>Wishlist</span>
          </button>
        </div>
      </div>
    </div> 
       )
    })}
    </>
  );
};

export default FoodItem;
