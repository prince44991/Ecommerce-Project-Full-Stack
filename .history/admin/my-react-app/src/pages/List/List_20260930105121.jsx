import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import './List.css';

const List = () => {
  const [display,setDisplay] = useState([])
  
  const datafetch = async () => {
    const url = 'http://localhost:8001';
    const response = await axios.get(`${url}/view/product`)
    console.log(response.data)
    setDisplay(response.data.data)

  }
  useEffect(() => {
    datafetch();
  },[])

  return (
    <div>
      <h1>hello List</h1>
      {display.map((r,index) => {
        return(
          <div key={index}>
            <img src={`http://localhost:8001/uploads/${r.image}`} />

            <h3>{r.productname}</h3>
            <h3>{r.description}</h3>
            <h3>{r.catagory}</h3>
            <h3>{r.price}</h3>
            </div>
        )
      })}
    </div>
  )
}

export default List

