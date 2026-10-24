import React from 'react'
import imges from '../../assets/Img.js';
const Explore = () => {
  return (
    <div>
      
      {
        imges.map((r) => {
          return(
            <div>
              <img src={r.imges} alt='image' />
              <p>{r.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Explore
