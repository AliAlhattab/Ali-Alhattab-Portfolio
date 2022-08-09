import React from "react";
import "./Nav.scss";
import "animate.css";
import NavMobile from "./NavMobile";
import NavTablet from "./NavTablet";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__image animate__animated animate__backInDown"></div>
      <div className="nav__group">
        <div className="nav__title">
          <p className="nav__name animate__animated animate__backInLeft">
            Ali Alhattab
          </p>
          <p className="nav__subtitle animate__animated animate__backInRight">
            Full Stack Web Developer
          </p>
        </div>
        <div className="nav__links">
          <NavMobile />
          <NavTablet />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
