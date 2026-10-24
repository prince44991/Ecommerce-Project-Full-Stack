import axios from 'axios';
import { useEffect, useState } from 'react';
import './List.css';

const List = () => {
  const [display, setDisplay] = useState([]);
 

  const datafetch = async () => {
    try {
      const url = 'http://localhost:8001';
      const response = await axios.get(`${url}/view/product`);
      setDisplay(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setDisplay([]);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div>
      {display.map((r,index) => {
        return(
          <div key={index}>
          <div className="list add flex-col">
            <p>All food list</p>
            <div className="list-table">
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>
            </div>

          </div>
            <img src={`http://localhost:8001/uploads/${r.image}`} />
             <h4>{r.productname}</h4>
             <h4>{r.description}</h4>
             <h4>{r.catagory}</h4>
             <h4>{r.price}</h4>
            </div>
        )
      })}
    </div>
  );
};

export default List;

