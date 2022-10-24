import React from "react";
import "./Nav.scss";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'

function NavLinks(props) {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="nav__list">
       <Link to="header" spy={true} smooth={true} offset={-100} duration={500} classname="nav__link"><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        LinkedIn
      </motion.li></Link>
     <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} classname="nav__link"><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        GitHub
      </motion.li></Link>
      <Link to="about" spy={true} smooth={true} offset={-100} duration={500} classname="nav__link" ><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Resume
      </motion.li></Link>
      
    </ul>
  );
}

export default NavLinks;
