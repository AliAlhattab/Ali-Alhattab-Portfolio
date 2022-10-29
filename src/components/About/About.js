import React from 'react'
import './About.scss'
import Skills from '../Skills/Skills.js'
import picture from '../../assets/images/pfp.PNG'

function About() {
  return (
    <section id="about" className='about'>
            <h1 className='about__title'>Welcome!</h1>
            <div className='about__image-container'>
            <img className='about__image' src={picture} alt='Profile Picture'/>
            </div>
            <p className='about__text'>Currently based in Ottawa, ON, I specialize in front-end web development. 
            I recently graduated from BrainStation's Web Development boot camp. I am naturally highly analytical, tenacious, and perpetually curious. 
            My passion for learning and desire to further my skills in development makes me excited to work with a team that fosters innovation and creativity!</p>
            <Skills/>
    </section>
  )
}

export default About