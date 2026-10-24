/** @format */

import React from "react";
import "./Explore.css";
import { Img } from "../../assets/Img.js";

const Explore = () => {
  return (
    <div>
      {Img.map((r) => {
        return (
          <div>
            <div className="img-contanir">
              <div className="img-list">
                <img src={r.image} width={150}  alt="image"></img>
                <p className="texts">{r.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
