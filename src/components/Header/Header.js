import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";

function Header() {
  const animateForm = { opacity: 0, x: -40 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <header className="header">
      <div className="header__title">
        <p className="header__subtext">Hello, I am</p>
        <motion.p
          className="header__text"
          initial={animateForm}
          animate={animateTo}
          transition={{ delay: 0.5 }}
        >
          Ali Alhattab
        </motion.p>
        <p className="header__subtext">Full Stack</p>
        <p className="header__subtext">Web Developer</p>
      </div>
      <div className="header__image"></div>
    </header>
  );
}

export default Header;
