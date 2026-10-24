import React, { useState,useContext, useEffect } from 'react'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
const ViewOrder = () => {
    const [order,setOrder] = useState([])

     const {token} = useContext(StoreContext)

    const callorderapi = async () => {

        const url = 'http://localhost:8001'
        try {
            const response = await axios.post(`${url}/order/userOrder`,{ headers: { token: token } })
            console.log("Order View:",response.data)
            setOrder(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callorderapi()
    },[])
    
  return (
    <div>
       {order.map((r,index) => {
        return(
            <div key={index}>
              <h3>{r.productname}</h3>
              <h3>{r.price}</h3>
                </div>
        )
       })}
    </div>
  )
}

export default ViewOrder
