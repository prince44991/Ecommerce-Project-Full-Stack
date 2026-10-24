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
          <input type="text" name="name" placeholder="Type here" id="image" />
        </div>
      </form>
    </div>
  );
};

export default Add;
