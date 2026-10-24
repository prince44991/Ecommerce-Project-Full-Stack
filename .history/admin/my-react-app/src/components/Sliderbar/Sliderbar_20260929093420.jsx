import React from 'react'
import './Sliderbar.css'
import item from '../../assets/add-to-cart.png';
import list from '../../assets/list-items.png';
import order from '../../assets/package.png';
import { Link } from 'react-router-dom';
const Sliderbar = () => {
  return (
    <div>
    <div className="sidebar">
        <div className="sidbar-options">
            <div className="sidbar-option">
                <img src={item} alt="" />
                <Link to="/Additem"><p>Add items</p></Link>
            </div>
            <div className="sidbar-option">
                <img src={list} alt="" />
                <Link to="/Listitem"><p>List items</p></Link>
            </div>
            <div className="sidbar-option">
                <img src={order} alt="" />
                <Link to="/Orders"><p>Orders</p></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sliderbar
