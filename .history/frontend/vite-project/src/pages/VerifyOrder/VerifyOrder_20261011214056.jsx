import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const VerifyOrder = () => {

    const [search,setSearch] = useSearchParams()
    const scuess = search.get("success")
    const orderId = search.get("orderId")
    const {urls} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifypay = async () => {
       const response = await axios.post(`${urls}/order/verifyorder`,{scuess,orderId})
       if(response.data.scuess){
        navigate("/success")
       }else{
        navigate("/")
       }
    }

    useEffect(() => {
        verifypay()
    })
  return (
    <div>
      <h1>Payment Scuessfull</h1>
    </div>
  )
}

export default VerifyOrder
