/** @format */

import { createContext, useEffect, useState } from "react";
// import { Img } from '../assets/Img';
import axios from "axios";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food, setFood] = useState([]);

  const urls = "http://localhost:8001";
  // const addCart = async (itemId,userId) => {

  //     const token = localStorage.getItem("token");

  //     console.log("itemId:", itemId)
  //     console.log("userId:", userId)

  //     if (!cartItems[itemId]) {
  //       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
  //     } else {
  //       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //     }

  //     if (token) {
  // await axios.post(
  //   `${urls}/cart/addcart`,
  //   { itemId },
  //   {
  //     headers: {
  //       token: token
  //     }
  //   })
  //     }else{
  //       alert("pleace login Acoount")
  //       console.log("not addcart....")
  //     }

  //     //console.log("Add cart response:", response.data);

  //     // if (response.data.success) {
  //     //   setCartItems((prev) => ({
  //     //     ...prev,
  //     //     [itemId]: (prev[itemId] || 0) + 1,
  //     //   }));
  //     // }
  //   };
  
  const token = localStorage.getItem("token");
  const addCart = async (itemId) => {

    console.log("itemId:", itemId);
    console.log("token:", token);

    if (!token) {
      alert("Please login account");
      return;
    }

    // UI update
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    try {
      const response = await axios.post(
        `${urls}/cart/addcart`,
        {
          itemId: itemId,
        },
        {
          headers: {
            token: token,
          },
        },
      );

      console.log("Add cart:", response.data);
    } catch (error) {
      console.log("Add cart error:", error.response?.data);
    }
  };

  const removecart = async (itemId) => {
    //const tokens = localStorage.getItem("token");

    console.log("itemId:", itemId);
    console.log("token:", token);

    if (!token) {
      alert("Pleace Account Login");
    }

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    try {
      const response = await axios.post(
        `${urls}/cart/removefromcart`,
        { itemId: itemId }, 
        { headers: { token: token } },
      );
      console.log("response data", response.data);
    } catch (error) {
      //console.log(error);
      console.log("error:", error.response?.data);
    }
  };

  const getCartData = async (token) => {
    try {
      const response = await axios.post(
        `${urls}/cart/getcart/${req.userId}`,
        { headers: { token: token } }
      );
      setCartItems(response.data.cartData);
      console.log("Cart data:", response.data);
    } catch (error) {
      console.log("Error fetching cart data:", error.response?.data);
    }
  };

  // const url = "http://localhost:8001";

  const [hello, setHello] = useState(() => localStorage.getItem("token") || "");

  const fetchData = async () => {
    try {
      const response = await axios.get(`${urls}/view/product`);
      console.log(response.data.data);
      setFood(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const cart in cartItems) {
      if (cartItems[cart] > 0) {
        const iteminfo = food.find((product) => product.id === Number(cart));
        if (iteminfo) {
          totalAmount += iteminfo.price * cartItems[cart];
        }
      }
    }
    return totalAmount;
  };

  const contextvalue = {
    cartItems,
    setCartItems,
    addCart,
    removecart,
    getTotalAmount,
    hello,
    setHello,
    fetchData,
    food,
  };

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};
