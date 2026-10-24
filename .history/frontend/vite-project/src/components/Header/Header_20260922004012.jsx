import React from 'react'
import headerimg from '../../assets/header.avif'

const Header = () => {
  return (
    <div>
      <img className='img-section' src={headerimg} width={1400} height={500} alt='img'></img>
    </div>
  )
}

export default Header
