import axios from 'axios';
import { useEffect, useState } from 'react';
import './List.css';

const List = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);

  const datafetch = async () => {
    try {
      const url = 'http://localhost:8001';
      const response = await axios.get(`${url}/view/product`);
      setDisplay(Array.isArray(response?.data?.data) ? response.data.data : []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setDisplay([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div className="list-page">
      <div className="list-header">
        <div>
          <p className="list-kicker">Inventory</p>
          <h1>Product List</h1>
        </div>
        <span className="list-count">{display.length} items</span>
      </div>

      {loading ? (
        <div className="list-empty">Loading products...</div>
      ) : display.length === 0 ? (
        <div className="list-empty">No products available right now.</div>
      ) : (
        <div className="list-grid">
          {display.map((r, index) => (
            <article className="list-card" key={r._id || index}>
              <div className="list-image-wrap">
                <img
                  src={r.image ? `http://localhost:8001/uploads/${r.image}` : 'https://via.placeholder.com/300x220?text=No+Image'}
                  alt={r.productname || 'Product image'}
                />
              </div>

              <div className="list-body">
                <div className="list-topline">
                  <span className="list-badge">{r.catagory || 'General'}</span>
                  <span className="list-price">₹{Number(r.price || 0).toLocaleString('en-IN')}</span>
                </div>

                <h3>{r.productname || 'Unnamed Product'}</h3>
                <p>{r.description || 'No description available.'}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;

