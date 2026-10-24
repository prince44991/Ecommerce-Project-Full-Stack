import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <img src={logo} alt='Logo' width={300} height={400}></img>
      </div>
    </div>
  )
}

export default Navbar
