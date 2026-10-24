/** @format */

import React from "react";
import "./Explore.css";
import { Img } from "../../assets/Img.js";

const Explore = () => {
  return (
    <div className="img-contanir">
      {Img.map((r) => {
        return (
          <div className="img-list" key={r.text}>
            <div className="Shoes Menu"
            <img src={r.image} width={100} className="images" alt={r.text} />
            <p className="texts">{r.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
