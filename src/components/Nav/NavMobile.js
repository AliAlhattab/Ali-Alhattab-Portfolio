import React from "react";
import "./Nav.scss";
import NavLinks from "./NavLinks";
import menu from "../../assets/images/Hamburger_icon.svg.png";
import { useState } from "react";

function NavMobile() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav__mobile">
      <img
        className="nav__menu animate__animated animate__bounceIn animate__delay-1s"
        src={menu}
        alt="Menu"
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
    </nav>
  );
}

export default NavMobile;
