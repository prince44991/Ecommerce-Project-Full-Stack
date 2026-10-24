import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Detalis = () => {
     const { id } = useParams();
     const [data,setData] = useState([])

     const callthedata = async () => {

        try {
            const response = await axios.get(`http://localhost:8001/view/product/${id}`)
            setData(response.data.data)
            console.log("data av:",response.data.data)
        } catch (error) {
            console.log(error)
        }

     }

     useEffect(() => {
        callthedata()
     })

     


  return (
    <div>
    
   {food.map((f,index) => {
    return (
        <div key={index}>
            <h3>hello</h3>
            <h3>prince</h3>
          
            </div>
    )
   })}
   </div>

  )
}
export default Detalis
