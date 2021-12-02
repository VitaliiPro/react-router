import "./Photo.css";
import React from "react";
import Photo1 from "./AllPhoto/Photo1.jpg";
import Photo2 from "./AllPhoto/Photo2.jpg";
import Photo3 from "./AllPhoto/Photo3.jpg";
import Photo4 from "./AllPhoto/Photo4.jpg";
import Photo5 from "./AllPhoto/Photo5.jpg";
import Photo6 from "./AllPhoto/Photo6.jpg";
import Photo7 from "./AllPhoto/Photo7.jpg";
import Photo8 from "./AllPhoto/Photo8.jpg";
import Photo9 from "./AllPhoto/Photo9.jpg";

const Photo = () => {
  return (
    <div className="photo">
      <div className="box">
        <img src={Photo1} alt="" />
        <img src={Photo2} alt="" />
        <img src={Photo3} alt="" />
      </div>
      <div className="box">
        <img src={Photo4} alt="" />
        <img src={Photo5} alt="" />
        <img src={Photo6} alt="" />
      </div>
      <div className="box">
        <img src={Photo7} alt="" />
        <img src={Photo8} alt="" />
        <img src={Photo9} alt="" />
      </div>
    </div>
  );
};

export default Photo;
