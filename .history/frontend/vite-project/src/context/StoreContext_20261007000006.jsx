import { createContext, useEffect, useState } from 'react';
// import { Img } from '../assets/Img';
import axios from "axios"

export const StoreContext = createContext(null);

export const StoreContextProvider = ( props ) => {
  const [cartItems,setCartItems] = useState({})
  const [food,setFood] = useState([])
  
  const urls = "http://localhost:8001"
  const addCart = async (itemId) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please log in to add items to your cart.");
    return;
  }
  
  try {
    const response = await axios.post(
      `${urls}/cart/addcart`,
      {
        itemId: itemId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Add cart response:", response.data);

    if (response.data.success) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));
    }
  

  } catch (error) {
    console.log("Add cart error:", error);

    alert(
      error.response?.data?.message ||
      "Could not add item to cart."
    );
  }
};

  const removecart = (itemid) => {
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }

  // const url = "http://localhost:8001";

  const [hello,setHello] = useState(() => localStorage.getItem('token') || '')


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
