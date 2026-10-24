import React from 'react'
import headerimg from '../../assets/header.avif'

const Header = () => {
  return (
    <div>
      <div className='img-sec'>
      <img  src={headerimg} width={1400} height={500} alt='img'></img>
      </div>
    </div>
  )
}

export default Header
