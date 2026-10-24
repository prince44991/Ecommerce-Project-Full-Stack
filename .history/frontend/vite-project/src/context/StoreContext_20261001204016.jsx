import { createContext, useEffect, useState } from 'react';
import { Img } from '../assets/Img';

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props ) => {
  const [cartItems,setCartItems] = useState({})
 
  const addCart = (itemid) => {

    if(!cartItems[itemid]){
        setCartItems((prev)=> ({...prev,[itemid]:1}))
    }else{
        setCartItems((prev)=> ({...prev,[itemid]:prev[itemid]+1}))
    }
  }

  const removecart = (itemid) => {
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }

  const url = "http://localhost:8001";

  const [token,setToken] = useState("")
 
  // useEffect(() => {
  //   console.log(cartItems)
  // },[cartItems])

  const getTotalAmount = () => {
    let totalAmount = 0
    for(const cart in cartItems){
      if(cartItems[cart]>0){
        const iteminfo = Img.find((product) => product.id === Number(cart))
        if (iteminfo) {
          totalAmount += iteminfo.price * cartItems[cart]
        }
      }
    }
    return totalAmount
  }

  const contextvalue = {Img,cartItems,setCartItems,addCart,removecart,getTotalAmount,url,setToken}

return(
   <StoreContext.Provider value={contextvalue}>
    {props.children}
   </StoreContext.Provider>
)
}

