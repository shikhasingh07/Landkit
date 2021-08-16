import React from "react";
import Button from "../Compoent/Recompoent/Button";
import Grp from "../Image/g.jpg";
import dashImage from "../Image/dash.jpg";
import yoga from "../Image/yoga.jpg";
import airbnb from "../Image/airbnb.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faAngleLeft,
  faAngleRight,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

import Card from "./Card";
const Form = () => {
  return (
    <>
      <div className="formMain">
        <div className="formBody">
          <div className="fomeInputMain">
            <div>
              <img alt="formImage" src={Grp} />
              <div className="formCard">
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Password" />
                <Button text={"Download a sample"} cls={`navButton fromBtn`} />
              </div>
            </div>
          </div>
          <div className="secondGrp">
            <div className="TextGroup">
              <p className="headingfirst">The most useful resource</p>
              <p className="headingSecond">ever created for dev |</p>
              <p className="headingpara">
                Using Lankit to build your site means never worring about
                designing another page or core browser Using Lankit to build
                your site means never worring about designing another page or
                core browser
              </p>
              <div className="groupIcon">
                <div>
                  <p>
                    <span className="TrikCol">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="greenCircule"
                      />
                      <FontAwesomeIcon icon={faCheck} className="colorTick" />
                    </span>
                    <span className="updateText">update</span>
                  </p>
                  <p>
                    <span className="TrikCol">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="greenCircule"
                      />
                      <FontAwesomeIcon icon={faCheck} className="colorTick" />
                    </span>
                    <span className="updateText">Tons of assets</span>
                  </p>
                </div>
                <div className="mainSecondGrp">
                  <p>
                    <span className="TrikCol">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="greenCircule"
                      />
                      <FontAwesomeIcon icon={faCheck} className="colorTick" />
                    </span>
                    <span className="updateText"> Tech support</span>
                  </p>
                  <p>
                    <span className="TrikCol">
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="greenCircule"
                      />
                      <FontAwesomeIcon icon={faCheck} className="colorTick" />
                    </span>
                    <span className="updateText">lntegeration ready</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="formBody">
          <div className="CodeScreen">
            <p className="codeHeading">We have lots of experience</p>
            <p className="codeHeading2">building Bootstrap themes .</p>
            <div>
              <p className="codepara">
                we've built well over a dozen Bootstarp themes and sold
              </p>
              <div className="scrParacodin">
                <div>
                  <span className="fontIcons">
                    <FontAwesomeIcon icon={faAngleLeft} className="arrowLeft" />
                    <div className="horizontal">&#x2503;</div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="arrowLeft"
                    />
                    <div className="scrgrp">
                      <p className="scrPara">
                        Bootstarp users since the beginning
                      </p>
                      <p className="scrPara2">
                        we've been developing with Bootstarp since it was
                        publicly released in 2011.
                      </p>
                    </div>
                  </span>
                  <span className="fontIcons">
                    <FontAwesomeIcon icon={faAngleLeft} className="arrowLeft" />
                    <div className="horizontal">&#x2503;</div>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="arrowLeft"
                    />
                    <div className="scrgrp">
                      <p className="scrPara">Deep understanding of Bootstarp</p>
                      <p className="scrPara2">
                        We've watched Bootstarp grow up over the years and
                        understand it better then almost anyone
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="codeImage">
            <img alt="ImgComputer" src={dashImage} className="dashImage" />
          </div>
        </div>
        <div className="cardMain">
          <div className="cardCenter">
            <p className="cardCenterHead">
              Our customers are our biggest fans.
            </p>
            <p className="cardCenterHead2">
              we don't Like to brag , but we don't mind letting our customer do
              it for us.
            </p>
            <p className="cardCenterHead2">
              we don't Like to brag , but we don't mind letting our customer do
              it for us.
            </p>
          </div>
          <div className="cardImage">
            <button className="btnArrow">&#x2190;</button>
            <div className="cardImageMain">
              <img src={Grp} alt="airbnb" />
              <div className="cardImageMain2">
                <img className="cardImageMainLogo" src={airbnb} alt="airbnb" />
                <p>
                  "Lankit is hands down the most useful front end Bootstrap
                  themes"
                </p>
                <p className="cardAuthor">Dave Gamche</p>
              </div>
            </div>
            <button className="btnArrowright">&#8594;</button>
          </div>
        </div>
        <div className="desginCard">
          <div className="desginCardHead">
            <div className="desginCardHead2">
              <div className="desginCardHeadpt">
                <p className="codeHeading">Stay Focused on your business</p>
                <p className="codeHeading2">Let us handle the design</p>
                <p className="codepara">
                  We've watched Bootstarp grow up over the years and understand
                  it better then almost anyone
                </p>
                <div className="cardSpan">
                  <span className="cardSpanB">
                    100%<p>Satisfaction</p>
                  </span>
                  <span className="cardSpanB">
                    24/7
                    <p>Support</p>
                  </span>
                  <span className="cardSpanB">
                    100k+
                    <p>Sales</p>
                  </span>
                </div>
              </div>
              <div className="yogaCardImg">
                <img alt="Yoga" src={yoga} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
};

export default Form;
