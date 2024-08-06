import React from "react";
import "./background.css";
import bg from "../../assets/images/bg.jpg";

const Background = () => {
  return (
    <div className="background">
      <img src={bg} alt="background-cover" />
    </div>
  );
};

export default Background;
