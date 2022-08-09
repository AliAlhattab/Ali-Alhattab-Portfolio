import React from "react";
import "./Nav.scss";
import { motion } from "framer-motion";

function NavLinks(props) {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="nav__list">
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Home
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        About Me
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Skills
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Projects
      </motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Contact Me
      </motion.li>
    </ul>
  );
}

export default NavLinks;
