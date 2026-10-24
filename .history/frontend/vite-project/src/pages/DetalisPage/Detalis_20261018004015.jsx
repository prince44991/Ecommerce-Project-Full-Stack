import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Detalis = () => {
     const { id } = useParams();
     const {food,setFood} = useContext(StoreContext)


  return (
    <div>
    
   {food.map((f,index) => {
    return (
        <div key={index}>
            <h3>hello</h3>
          
            </div>
    )
   })}
   </div>

  )
}
export default Detalis
