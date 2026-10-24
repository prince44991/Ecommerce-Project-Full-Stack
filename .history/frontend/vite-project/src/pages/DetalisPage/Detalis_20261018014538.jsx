import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
const Detalis = () => {
     const { id } = useParams();
     const [data,setData] = useState([])

     const callthedata = async () => {

        try {
            const response = await axios.get(`http://localhost:8001/view/product/${id}`)
            setData(response.data.data)
            console.log("Data Type:", typeof response.data);
            console.log("data av:",response.data.data)
        } catch (error) {
            console.log(error)
        }

     }

     useEffect(() => {
        callthedata()
     },[])

  return (
    <div>
    
   {data.map((f,index) => {
    return (
        <div key={index}>
          <h1>{f.productname}</h1>
          
            </div>
    )
   })}
   </div>

  )
}
export default Detalis
