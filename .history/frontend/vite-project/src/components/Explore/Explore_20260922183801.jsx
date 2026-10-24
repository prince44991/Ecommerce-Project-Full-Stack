/** @format */

import React from "react";
import "./Explore.css";
import { Img } from "../../assets/Img.js";

const Explore = () => {
  return (
    <div className="img-contanir">
        <h1>Shoes Menu</h1>
      {Img.map((r) => {
        return (
          <div className="img-list" key={r.text}>
            <img src={r.image} width={100} className="images" alt={r.text} />
            <p className="texts">{r.text}</p>
            </div>
         
        );
      })}
    </div>
  );
};

export default Explore;
