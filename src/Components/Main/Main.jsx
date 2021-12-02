import React from "react";
import MainImg from "./ImgMain/MainImg.jpg";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <h3>React Router</h3>
      <img src={MainImg} className="img-main" alt=""></img>
      <p>
        React Router v6 is Here Closing in on a decade of client-side routing,
        React Router v6 takes the best features from previous versions—and its
        sister project, Reach Router—in our smallest and most powerful package
        yet.
      </p>
    </div>
  );
};

export default Main;
