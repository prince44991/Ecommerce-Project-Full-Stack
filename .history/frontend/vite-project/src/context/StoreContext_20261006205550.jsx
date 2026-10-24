import { createContext, useEffect, useState } from 'react';
// import { Img } from '../assets/Img';
import axios from "axios"

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props ) => {
  const [cartItems,setCartItems] = useState({})
  const [food,setFood] = useState([])
 
  const addCart = (itemid) => {

    if(!cartItems[itemid]){
        setCartItems((prev)=> ({...prev,[itemid]:1}))
    }else{
        setCartItems((prev)=> ({...prev,[itemid]:prev[itemid]+1}))
    }
   
    const response = axios.post(`{urls}/addcart`, { itemId: itemid })
    const responseData = response.data
    console.log(responseData)
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
  }

  const removecart = (itemid) => {
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }

  // const url = "http://localhost:8001";

  const [hello,setHello] = useState(() => localStorage.getItem('token') || '')

  const urls = "http://localhost:8001"

  const fetchData = async () => {

    try {
      const response = await axios.get(`${urls}/view/product`)
      console.log(response.data.data)
      setFood(response.data.data)
    } catch (error) {
      console.log(error)
    }

  }
  
  useEffect(() => {
    fetchData()
  }, [])
 


  const getTotalAmount = () => {
    let totalAmount = 0
    for(const cart in cartItems){
      if(cartItems[cart]>0){
        const iteminfo = food.find((product) => product.id === Number(cart))
        if (iteminfo) {
          totalAmount += iteminfo.price * cartItems[cart]
        }
      }
    }
    return totalAmount
  }

  const contextvalue = {cartItems,setCartItems,addCart,removecart,getTotalAmount,hello,setHello,fetchData,food}

return(
   <StoreContext.Provider value={contextvalue}>
    {props.children}
   </StoreContext.Provider>
)
}

