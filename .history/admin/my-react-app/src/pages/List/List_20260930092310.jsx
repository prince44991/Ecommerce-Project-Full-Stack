import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

const List = () => {
  const [display,setDisplay] = useState([])

  useEffect(() => {
    
    const datafetch = async () => {
      const url = 'http://localhost:8001';
      const response = await axios.get(`${url}/view/product`)
      const data = response.data;
      console.log(response.data)
      setDisplay(response.data.data)

    }

    datafetch();
  })

  return (
    <div>
      <h1>hello List</h1>
      {data.map((r) => {
        return(
          <div>
            <h3>{data.productname}</h3>
            </div>
        )
      })}
    </div>
  )
}

export default List
