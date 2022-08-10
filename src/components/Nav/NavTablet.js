import React from "react";
import "./Nav.scss";
import NavLinks from "./NavLinks";

function NavTablet() {
  return (
    <nav className="nav__tablet animate__animated animate__bounceIn animate__delay-1s">
      <NavLinks />
    </nav>
  );
}

export default NavTablet;
