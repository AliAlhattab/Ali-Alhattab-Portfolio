import React from 'react'

function Nav() {
  return (
    <nav className='nav'>
        <div className='nav__image'></div>
        <div className='nav__title'>
            <p className='nav__name'>Ali Alhattab</p>
            <p className='nav__subtitle'>Full Stack Web Developer</p>
        </div>
        <div className='nav__links'>
            <img className='nav__link' src='' alt='Home'/>
            <img className='nav__link' src='' alt='Github'/>
            <img className='nav__link' src='' alt='LinkedIn'/>

        </div>
    </nav>
  )
}

export default Nav