import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const data = [
  {
    title: "Built for developers",
    des: "Lankit is built to make your life easier Variables , build tooling , documnentation , and resusable components .",
  },
  {
    title: "Designed to be modern",
    des: "Designed with the latest design trends in mind . Lankit feels modren , minimal, and beautiful.",
  },
  {
    title: "Documentation for everything ",
    des: "We've written extensive documentation for compoents and tools , so you never have to reverse engineer anything.",
  },
];
const Small = () => {
  return (
    <>
      <div className="smContainer">
        <div className="smallParts">
          <div className="smIcons IconEqual">
            <FontAwesomeIcon icon={faToggleOn} className="rotate arrowLeft" />
            <FontAwesomeIcon icon={faToggleOn} className="arrowLeft" />
          </div>
          <p className="smaheading">{data[0].title}</p>
          <p className="smaheading2">{data[0].des}</p>
        </div>
        <div className="smallParts">
          <div className="codeIcon IconEqual">
            <FontAwesomeIcon icon={faAngleLeft} className="arrowLeft" />
            <div className="horizontal">&#x2503;</div>
            <FontAwesomeIcon icon={faAngleRight} className="arrowLeft" />
          </div>
          <p className="smaheading">{data[1].title}</p>
          <p className="smaheading2">{data[1].des}</p>
        </div>
        <div className="smallParts">
          <div className="codeIcon IconEqual">
            <FontAwesomeIcon icon={faAngleLeft} className="arrowLeft" />
            <div className="horizontal">&#x2503;</div>
            <FontAwesomeIcon icon={faAngleRight} className="arrowLeft" />
          </div>
          <p className="smaheading">{data[2].title}</p>
          <p className="smaheading2">{data[2].des}</p>
        </div>
      </div>
    </>
  );
};

export default Small;
