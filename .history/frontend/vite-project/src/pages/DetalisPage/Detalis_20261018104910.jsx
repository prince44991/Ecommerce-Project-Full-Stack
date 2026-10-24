import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
const Detalis = () => {
     const { id } = useParams();
     const [data,setData] = useState(null)
 
     const callthedata = async () => {

        try {
            const response = await axios.get(`http://localhost:8001/view/product/${id}`)
            setData(response.data)
            console.log("Data Type:", typeof response.data);
            console.log("data av:",response.data)
            
        } catch (error) {
            console.log(error)
        }

     }

     useEffect(() => {
        callthedata()
     },[id])

     if(!data){
        return <h3>Loading....</h3>
     }

  return (
    <div>
        <img src={`http://localhost:8001/uploads/${data.data.image}`} />
    <h1>{data.data.productname}</h1>
    <h1>{data.data.price}</h1>
    
   


   </div>

  )
}
export default Detalis
