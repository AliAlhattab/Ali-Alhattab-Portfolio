import React from "react";
import "./Nav.scss";
import { motion } from "framer-motion";
import resume from '../../assets/pdf/Ali-Alhattab-Resume.pdf'
import {NavLink} from 'react-router-dom';

function NavLinks(props) {
  const animateForm = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="nav__list">
        <NavLink to='/' classname="nav__link"><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Home
      </motion.li></NavLink>
       <a href="https://github.com/AliAlhattab" target='blank' classname="nav__link"><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Github
      </motion.li></a>
      <a href="https://www.linkedin.com/in/alialhattab/" target='blank' classname="nav__link"><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        LinkedIn
      </motion.li></a>
      <a href={resume} target='blank' classname="nav__link"><motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        className="nav__option"
        onClick={() => props.isMobile && props.closeMenu()}
      >
        Resume
      </motion.li></a>
      
    </ul>
  );
}

export default NavLinks;
