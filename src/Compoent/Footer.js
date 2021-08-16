import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Landkit</h1>
          <address>A better way to build</address>
          <div className="Iconcol">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Product</h2>

            <ul className="nav__ul">
              <li>
                <a href="!#">Page Builder</a>
              </li>

              <li>
                <a href="!#">UI Kit</a>
              </li>

              <li>
                <a href="!#">UI Kit</a>
              </li>
              <li>
                <a href="!#">UI Kit</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="!#">Privacy Policy</a>
              </li>

              <li>
                <a href="!#">Terms of Use</a>
              </li>

              <li>
                <a href="!#">Sitemap</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Service</h2>

            <ul className="nav__ul">
              <li>
                <a href="!#">Privacy Policy</a>
              </li>

              <li>
                <a href="!#">Terms of Use</a>
              </li>

              <li>
                <a href="!#">Sitemap</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">CONNECT</h2>

            <ul className="nav__ul">
              <li>
                <a href="!#">Privacy Policy</a>
              </li>

              <li>
                <a href="!#">Terms of Use</a>
              </li>

              <li>
                <a href="!#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
