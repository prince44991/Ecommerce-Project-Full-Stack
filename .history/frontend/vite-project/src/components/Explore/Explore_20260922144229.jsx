import React from 'react'
import {Img} from '../../assets/Img.js';
const Explore = () => {
  return (
    <div>
      
      {
         Img .map((r) => {
          return(
            <div>
              <img src={r.image} alt='image' />
              <p>{r.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Explore
