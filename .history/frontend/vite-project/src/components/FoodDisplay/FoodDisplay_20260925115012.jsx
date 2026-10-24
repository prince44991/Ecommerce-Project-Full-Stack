import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({Catagory}) => {
    const {Img} = useContext(StoreContext)
  return (
    <div>
      <h3>Shoes Product Show The Data</h3>
      {Img.map((item,index) => {
        return(
         <div>
        </div>
        )
      })}
    </div>
  )
}

export default FoodDisplay
