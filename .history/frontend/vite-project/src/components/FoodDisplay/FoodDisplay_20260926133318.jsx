import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

const FoodDisplay = ({ Catagory }) => {
  const { Img } = useContext(StoreContext)

  return (
    <div className="food-display">
      {Img.map((item) => {
        // Debugging log
        console.log(Catagory, item.text);

        // Condition match hone par FoodItem return hoga
        if (Catagory === "All" || Catagory === item.text) {
          return (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.text}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        }

        // Agar condition match na ho toh null return karein
        return null;
      })}
    </div>
  )
}

export default FoodDisplay