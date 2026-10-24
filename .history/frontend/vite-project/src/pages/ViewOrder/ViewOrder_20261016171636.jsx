import React, { useState,useContext } from 'react'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
const ViewOrder = () => {
    const [order,setOrder] = useState([])

     const {token} = useContext(StoreContext)

    const callorderapi = async () => {

        const url = 'http://localhost:8001'
        try {

            const response = axios.post(`${url}/order/userOrder`, { headers: { token: token } })
            console.log(response.data.data)
            setOrder(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div>
       {order.map((r,index) => {
        return(
            <div key={index}>
              <h3>{r.name}</h3>
                </div>
        )
       })}
    </div>
  )
}

export default ViewOrder
