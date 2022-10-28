import React from 'react'
import './Home.scss'
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <section className='home'>
        <ul className='home__list'>   
        <NavLink className='home__link' to='/projects'><li className='home__options'>Projects</li></NavLink>
        <li className='home__dot'>•</li>
        <NavLink className='home__link' to='/about'><li className='home__options'>About</li></NavLink>
        <li className='home__dot'>•</li>
        <NavLink className='home__link' to='/contact'><li className='home__options'>Contact</li></NavLink>
        </ul>
    </section>
  )
}

export default Home