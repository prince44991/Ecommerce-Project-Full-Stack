import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({Catagory}) => {
    const {Img} = useContext(StoreContext)
  return (
    <div>
      <h3>Shoes Product Show The Data</h3>
      {Img.map((item,index) => {
        return <FoodItem key={index} id={item._id} name={item.name} desription={item.description} price={item.price} image={item.image} />
    
        
      })}
    </div>
  )
}

export default FoodDisplay
