/** @format */

import React from "react";
import cloud from "../../assets/cloud-computing.png";
const Add = () => {
  return (
    <div className="add">
      <form>
        <div className="add-img-upload flex-col">
          <h4>Upload Image</h4>
          <label htmlFor="image">
            <img src={cloud} />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>product name</p>
          <input type="text" name="name" placeholder="Type here" id="image" /> 
        </div>
        <div className="add-product-description">
          <p>description</p>
         <textarea name='description' rows="10" cols="30" placeholder="write contect here"></textarea>
        </div>
        <div className="add-catagory-price">
          <div className="add-catagory flex-col">
<p>Product catagory</p>
<select name='catagory'>
<option value="sneakers Man">sneakers Man</option>
<option value="Loafers">Loafers</option>
<option value="Sports & Athletic Shoes">Sports & Athletic Shoes</option>
<option value="Oxfords">Oxfords</option>
<option value="Chelsea Boots">Chelsea Boots</option>
<option value="Flats / Ballerinas">Flats / Ballerinas</option>
<option value="Heels">Heels</option>
{/* <option value="Chelsea Boots"></option> */}

</select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
