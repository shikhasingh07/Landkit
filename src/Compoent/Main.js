import React from "react";
import Button from "./Recompoent/Button";
import Img from "../Image/main.jpg";
import Small from "./Recompoent/Small";

const Main = () => {
  return (
    <>
      <div className="mainpage">
        <div className="mainCon">
          <p className="mainHead">
            Welcome to Landkit <span>Landkit</span>.
          </p>
          <p className="mainHead">Develop anything</p>
          <p className="mainsecond">
            Build a beautiful , modern website with flexible
          </p>
          <p className="mainsecond">Bootstarp components built from scratch</p>
          <div className="btnGroup">
            <Button
              text={`View all pages`}
              cls={`navButton`}
              sy=" &nbsp;&#8594;"
            />
            <Button text={`Documentation`} cls={`mainCol`} />
          </div>
        </div>
        <img alt="mainImage" className="mainImage" src={Img} />
      </div>
      <Small />
    </>
  );
};

export default Main;
