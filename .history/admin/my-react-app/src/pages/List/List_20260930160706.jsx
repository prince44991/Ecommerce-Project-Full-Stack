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
    <div className="list-page">
      <div className="list-header mt-5">
        <div>
          <p className="eyebrow">Inventory</p>
          <h2>All Food List</h2>
        </div>
       
      </div>

      <div className="list-table-wrapper">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {display.map((r, index) => (
          <div key={index} className="list-table-format row">
            <img
              src={`http://localhost:8001/uploads/${r.image}`}
              alt={r.productname}
            />

            <div className="food-info">
              <p className="food-name">{r.productname}</p>
              <span className="food-desc">{r.description}</span>
            </div>

            <p className="category-pill">{r.catagory}</p>
            <p className="price-tag">₹{r.price}</p>

            <div className="action-cell">
              <button type="button" className="row-action">*</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

