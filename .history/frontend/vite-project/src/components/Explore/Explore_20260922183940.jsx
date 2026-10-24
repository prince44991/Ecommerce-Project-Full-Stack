/** @format */

import React from "react";
import "./Explore.css";
import { Img } from "../../assets/Img.js";

const Explore = () => {
  return (
        <>
      <h2>Shoes Menu</h2>
      <div className="img-contanir">
      {Img.map((r) => {
        return (
          <div className="img-list" key={r.text}>
            <img src={r.image} width={100} className="images" alt={r.text} />
            <p className="texts">{r.text}</p>
            </div>
         
        );
      })}
    </div>
    </>
  );
};

export default Explore;
