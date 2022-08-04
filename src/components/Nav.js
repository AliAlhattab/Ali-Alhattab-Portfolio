import React from 'react'
import './Nav.scss'
import menu from '../assets/images/Hamburger_icon.svg.png'
import 'animate.css';

function Nav() {
  return (
    <nav className='nav'>
        <div className='nav__image animate__animated animate__backInDown'></div>
        <div className='nav__group'>
         <div className='nav__title'>
            <p className='nav__name animate__animated animate__backInLeft'>Ali Alhattab</p>
            <p className='nav__subtitle animate__animated animate__backInRight'>Full Stack Web Developer</p>
        </div>
        <div className='nav__links'>
            <img className='nav__menu animate__animated animate__bounceIn animate__delay-1s' src={menu} alt='Menu'/>
            <ul className='nav__list'>
                <li className='nav__option'>Home</li>
                <li className='nav__option'>About Me</li>
                <li className='nav__option'>Skills</li>
                <li className='nav__option'>Projects</li>
                <li className='nav__option'>Contact Me</li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Nav