import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({ Catagory }) => {
  const { Img } = useContext(StoreContext)

  return (
    <div className="food-display">
      {Img.map((item) => (
        
      if (Catagory === "All" || Catagory === item.text) {
        
        <FoodItem
         key={item.id}
         id={item.id}
         name={item.text}
         description={item.description}
         price={item.price}
         image={item.image}
         
       />
      }
        
      ))}
    </div>
  )
}

export default FoodDisplay
