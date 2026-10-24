import React from 'react'
import './Sliderbar.css'
import item from '../../assets/add-to-cart.png';
import list from '../../assets/list-items.png';
import order from '../../assets/package.png';
const Sliderbar = () => {
  return (
    <div>
    <div className="sidebar">
        <div className="sidbar-options">
            <div className="sidbar-option">
                <img src={item} alt="" />
                <p>Add items</p>
            </div>
            <div className="sidbar-option">
                <img src={list} alt="" />
                <p>List items</p>
            </div>
            <div className="sidbar-option">
                <img src={order} alt="" />
                <p>Orders</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sliderbar
