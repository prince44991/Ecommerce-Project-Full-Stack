import React, { useContext } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const VerifyOrder = () => {

    const [search,setSearch] = useSearchParams()
    const scuess = search.get("success")
    const orderId = search.get("orderId")
    const {urls} = useContext(StoreContext)
  return (
    <div>
      
    </div>
  )
}

export default VerifyOrder
