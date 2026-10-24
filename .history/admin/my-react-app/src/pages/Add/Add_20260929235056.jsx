/** @format */

import React, { useState } from "react";
import cloud from "../../assets/cloud-computing.png";
import axios from 'axios'
import "./Add.css";
const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    productname: "",
    description: "",
    catagory: "",
    price: "",
  });

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const handlSubmit = async (event) => {
      event.preventDefault()

      const url = 'http://localhost:8001';
      const formdata = new FormData();
      formdata.append('productname',data.productname)
      formdata.append('description',data.description)
      formdata.append('catagory',data.catagory)
      formdata.append('price',Number(data.price))
      formdata.append('image',data.image)
     
      const response = await axios.post(`${url}/add/product`,formdata)
      if(response){
        setData({
          productname:"",
          description:"",
          catagory:"",
          price:"",
        })
      }
  }
  return (
    <div className="add">
      <form onSubmit={handlSubmit}>
        <div className="add-img-upload flex-col ">
          <h4>Upload Image</h4>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : cloud} />
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input
            type="text"
            name="productname"
            placeholder="Type here"
            onChange={handleOnchange}
            value={data.productname}
            id="image"
          />
        </div>
        <div className="add-product-description">
          <p>description</p>
          <textarea
            name="description"
            rows="10"
            cols="30"
            placeholder="write contect here"
            onChange={handleOnchange}
            value={data.description}
          ></textarea>
        </div>
        <div className="add-catagory-price">
          <div className="add-catagory flex-col">
            <p>Product catagory</p>
            <select name="catagory" onChange={handleOnchange}>
              <option value="sneakers Man">sneakers Man</option>
              <option value="Loafers">Loafers</option>
              <option value="Sports & Athletic Shoes">
                Sports & Athletic Shoes
              </option>
              <option value="Oxfords">Oxfords</option>
              <option value="Chelsea Boots">Chelsea Boots</option>
              <option value="Flats / Ballerinas">Flats / Ballerinas</option>
              <option value="Heels">Heels</option>
              {/* <option value="Chelsea Boots"></option> */}
            </select>
          </div>

          <div className="add-price flex-col">
            <p>product price</p>
            <input type="number" name="price" placeholder="$20" onChange={handleOnchange} value={data.price} />
          </div>
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Add;
