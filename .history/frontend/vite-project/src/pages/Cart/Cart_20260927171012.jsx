import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,Img,addCart,removecart,} = useContext(StoreContext)
  return (
    <div>
       {Img.map((item,index) => {
         if(cartItems[item._id]>0){
            return(
              <div>
                {item.name}
                </div>
            )
         }
       })}
    </div>
  )
}

export default Cart
