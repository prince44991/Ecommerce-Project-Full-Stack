import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#dashboard" aria-label="Savor admin dashboard">
        <span className="navbar__logo" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 27c-6.2 0-10-4.2-10-9.7C6 11.6 10.5 6 19.5 5c-.2 5.6-2.7 8.3-6.8 10.2 3.4-1.1 7-3.7 9.2-7.4C27.7 14 24.8 27 16 27Z" fill="currentColor" />
            <path d="M9 23c3.2-4.2 6.1-6.3 10.8-8.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
        <span className="navbar__name">Savor<span>.</span></span>
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        <a className="navbar__link navbar__link--active" href="#dashboard" aria-current="page">Dashboard</a>
        <a className="navbar__link" href="#add-food">Add food</a>
        <a className="navbar__link" href="#food-list">Food list</a>
        <a className="navbar__link" href="#orders">Orders</a>
      </nav>
    </header>
  )
}

export default Navbar
