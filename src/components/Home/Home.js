import React from 'react'
import './Home.scss'

function Home() {
  return (
    <section className='home'>
        <ul className='home__list'>   
        <li className='home__options'>Projects</li>
        <li className='home__options'>•</li>
        <li className='home__options'>About</li>
        <li className='home__options'>•</li>
        <li className='home__options'>Contact</li>
        </ul>
    </section>
  )
}

export default Home