import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <div className='header__title'>
        <p className='header__subtext'>Hello, I am</p>
        <p className='header__text'>Ali Alhattab</p>
        <p className='header__subtext'>Full Stack</p>
        <p className='header__subtext'>Web Developer</p>
      </div>
      <div className='header__image'>
      </div>
    </header>
  )
}

export default Header