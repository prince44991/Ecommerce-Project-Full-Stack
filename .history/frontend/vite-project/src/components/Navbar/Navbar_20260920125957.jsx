import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <img src={logo} alt='Logo' width={100} height={100}></img>
      </div>
    </div>
  )
}

export default Navbar
