import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,Img,addCart,removecart,} = useContext(StoreContext)
  return (
    <div>
       {Img.map((item,index) => {
         if(cartItems[item.id]>0){
            return(
              <div>
                <img src={item.image}/>
                </div>
            )
         }
       })}
    </div>
  )
}

export default Cart
