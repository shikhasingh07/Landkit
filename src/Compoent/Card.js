import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faCheck,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Button from "./Recompoent/Button";
const Card = () => {
  return (
    <>
      <div className="ma">
        <div className="cardPri">
          <p className="codeHeading cardPri2">Fair, simple pricing for all</p>
          <p className="codepara cardPri2">
            All types of businesses need access to developing resource , so we
          </p>
          <p className="codepara cardPri2">
            give you the option to decide how much you need to use
          </p>
          <span className="cardPri2 cardIcons">
            <span>Annual</span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faToggleOn} className="rotate toGLe" />
            </span>
            <span>Montly</span>
          </span>
        </div>
        <div className="diviedCard">
          <div className="priceCard">
            <div class="gold">
              <button className="btnPriceTag">STANDARD</button>
              <div className="mainpriceGrp">
                <span className="pricecartext">$</span>
                <p className="pricecartext1">29 </p>
                <h2 className="pricecartext2">/mo</h2>
              </div>
              <p className="perprice">per seat</p>
              <div className="trickGrops">
                <span className="TrikCol priclTrick">
                  <FontAwesomeIcon icon={faCircle} className="greenCircule" />
                  <FontAwesomeIcon icon={faCheck} className="colorTick" />
                </span>
                <span className="updateText priceText">
                  Rich , responsive landing pages
                </span>
              </div>
              <div className="trickGrops">
                <span className="TrikCol priclTrick">
                  <FontAwesomeIcon icon={faCircle} className="greenCircule" />
                  <FontAwesomeIcon icon={faCheck} className="colorTick" />
                </span>
                <span className="updateText priceText">
                  {" "}
                  Rich , responsive landing pages
                </span>
              </div>
              <div className="trickGrops">
                <span className="TrikCol priclTrick">
                  <FontAwesomeIcon icon={faCircle} className="greenCircule" />
                  <FontAwesomeIcon icon={faCheck} className="colorTick" />
                </span>
                <span className="updateText priceText">
                  {" "}
                  Rich , responsive landing pages
                </span>
              </div>
              <div className="trickGrops">
                <span className="TrikCol priclTrick">
                  <FontAwesomeIcon icon={faCircle} className="greenCircule" />
                  <FontAwesomeIcon icon={faCheck} className="colorTick" />
                </span>
                <span className="updateText priceText">
                  {" "}
                  Rich , responsive landing pages
                </span>
              </div>
              <div className="trickGrops">
                <span className="TrikCol priclTrick">
                  <FontAwesomeIcon icon={faCircle} className="greenCircule" />
                  <FontAwesomeIcon icon={faCheck} className="colorTick" />
                </span>
                <span className="updateText priceText">
                  {" "}
                  Rich , responsive landing pages
                </span>
              </div>
              <button className="priceTagbtn getNow">Get it now</button>
            </div>
            <div className="plat">
              <button className="btnPriceTag">ENTERPRICE</button>
              <p className="pricepara">
                we offer variables pricing with dixcount for larger origination{" "}
              </p>
              <button className="priceTagbtn btntag">Contact us</button>
            </div>
          </div>
        </div>
        <div className="partTwoPrice">
          <div className="partPricesub">
            <div className="trickPrick">
              <span className="TrikCol priclTrick">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="greenCircule NewCircule"
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="colorTick newTrickp"
                />
              </span>
              <div className=" priceText">
                Rich , responsive landing pages
                <p>
                  Absoultely . the Booststrap Themes licencs allows you to build
                  a website for a personal or for a client
                </p>
              </div>

              <span className="TrikCol priclTrick">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="greenCircule NewCircule"
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="colorTick newTrickp"
                />
              </span>
              <div className=" priceText">
                Rich , responsive landing pages
                <p>
                  Absoultely . the Booststrap Themes licencs allows you to build
                  a website for a personal or for a client
                </p>
              </div>
            </div>
            <div className="subPartTwo">
              <span className="TrikCol priclTrick">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="greenCircule NewCircule"
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="colorTick newTrickp"
                />
              </span>
              <div className=" priceText">
                Rich , responsive landing pages
                <p>
                  Absoultely . the Booststrap Themes licencs allows you to build
                  a website for a personal or for a client
                </p>
              </div>
              <span className="TrikCol priclTrick">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="greenCircule NewCircule"
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="colorTick newTrickp"
                />
              </span>
              <div className=" priceText">
                Rich , responsive landing pages
                <p>
                  Absoultely . the Booststrap Themes licencs allows you to build
                  a website for a personal or for a client
                </p>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="getNowCard">
            <div className="getNowCard2">
              <div className="getNowCardLayout">
                <button className="btnPriceTag btnNowCard">GET STARTED</button>
                <p className="getNowCardheading">
                  Get LandKit and save your time.
                </p>
                <p className="getNowCardsub">
                  Stop wasting time trying to do it the"right way" Absoultely .
                  the Booststrap Themes licencs allows you to build a website
                  for a personal or for a client
                </p>
                <Button
                  text={`Buy it now`}
                  cls={`mainCol colchange`}
                  sy=" &nbsp;&#8594;"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Card;
