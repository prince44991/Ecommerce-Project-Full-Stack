import React from 'react'
import './Sliderbar.css'
import item from '../../assets/add-to-cart.png';
import list from '../../assets/list-items.png';
import order from '../../assets/package.png';
import { NavLink } from 'react-router-dom';
const Sliderbar = () => {
  return (
    <div>
    <div className="sidebar">
        <div className="sidbar-options">
            <div className="sidbar-option">
                <img src={item} alt="" />
                <NavLink to="/Additem"><p className='par'>Add items</p></NavLink>
            </div>
            <div className="sidbar-option">
                <img src={list} alt="" />
                <NavLink to="/Listitem"><p className='par'>List items</p></NavLink>
            </div>
            <div className="sidbar-option">
                <img src={order} alt="" />
                <NavLink to="/Orders"><p className='par'>Orders</p></NavLink>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sliderbar
