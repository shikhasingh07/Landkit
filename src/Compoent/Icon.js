import React from "react";
import airbnb from "../Image/airbnb.svg";
import coin from "../Image/coinbase.svg";
import drib from "../Image/d.svg";
import insta from "../Image/insta.svg";
import pin from "../Image/p.svg";
const Icon = () => {
  return (
    <div className="iconMain">
      <div className="iconGroup">
        <img className="logoIcon first" src={airbnb} alt="airbnb" />
        <img className="logoIcon" src={coin} alt="airbnb" />
        <img className="logoIcon extraI" src={drib} alt="airbnb" />
        <img className="logoIcon " src={insta} alt="airbnb" />
        <img className="logoIcon " src={pin} alt="airbnb" />
      </div>
    </div>
  );
};

export default Icon;
