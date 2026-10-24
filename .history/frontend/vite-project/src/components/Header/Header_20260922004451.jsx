import React from 'react'
import './Header.css'
import headerimg from '../../assets/header.avif'

const Header = () => {
  return (
    <header className='hero-section'>
      <div className='hero-content'>
        <span className='hero-badge'>New Season Collection</span>
        <h1>Step Into Style</h1>
        <p>
          Premium shoes designed for comfort, speed, and everyday confidence.
          Discover the perfect pair for every move.
        </p>

        <div className='hero-actions'>
          <button className='primary-btn'>Shop Now</button>
          <button className='secondary-btn'>Explore</button>
        </div>

        <div className='hero-stats'>
          <div>
            <strong>25k+</strong>
            <span>Happy buyers</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Customer rating</span>
          </div>
          <div>
            <strong>Free</strong>
            <span>Shipping</span>
          </div>
        </div>
      </div>

      <div className='hero-image-wrap'>
        <img src={headerimg} alt='Premium running shoes' />
      </div>
    </header>
  )
}

export default Header
