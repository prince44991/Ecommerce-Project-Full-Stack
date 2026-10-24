import React, { useState,useContext, useEffect } from 'react'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
const ViewOrder = () => {
    const [order,setOrder] = useState([])

     const {token} = useContext(StoreContext)

    const callorderapi = async () => {

        const url = 'http://localhost:8001'
        try {
            const response = await axios.post(`${url}/order/userOrder`,{},{ headers: { token: token } })
            console.log("Order View:",response.data)
            setOrder(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(token){
            callorderapi()
        }
    },[token])
    
  return (
    <div>
        <h1>Order View</h1>
       {order.map((r,index) => {
        return(
            <div key={index}>
               <p>{r.items.map((t) => {
                if(index === r.items.length-1){

                    return t.productname+" x "+ t.quantity
                }else{
                    return t.productname+" x "+ t.quantity+" , "
                }
               })}</p>
                </div>
        )
       })}
    </div>
  )
}

export default ViewOrder
