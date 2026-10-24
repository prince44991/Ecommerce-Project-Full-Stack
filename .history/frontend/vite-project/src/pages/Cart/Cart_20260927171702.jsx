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
                <p>{item.text}</p>
                <p>{item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>{item.price*cartItems[item.id]}</p>
                </div>
            )
         }
       })}
    </div>
  )
}

export default Cart
