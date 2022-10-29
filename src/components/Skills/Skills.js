import React from 'react'
import './Skills.scss'
import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import js from '../../assets/skills/js.svg'
import sass from '../../assets/skills/sass.svg'
import react from '../../assets/skills/react.svg'
import npm from '../../assets/skills/npm.svg'
import json from '../../assets/skills/json.svg'
import postman from '../../assets/skills/postman.svg'
import nodejs from '../../assets/skills/nodejs.svg'
import express from '../../assets/skills/express.svg'
import mysql from '../../assets/skills/mysql.svg'
import jwt from '../../assets/skills/jwt.svg'
import jest from '../../assets/skills/jest.svg'
import bootstrap from '../../assets/skills/bootstrap.svg'
import heroku from '../../assets/skills/heroku.svg'

function Skills() {
  return (
    <section id="skills" className='skills'>
      <h1 className='skills__title'>Tech Stack:</h1>
      <div className='skills__container'>
        <div className='skills__badges'>
      <img className='skills__image' src={html}/>
      <img className='skills__image' src={css}/>
      <img className='skills__image' src={js}/>
      <img className='skills__image' src={sass}/>
      <img className='skills__image' src={react}/>
      <img className='skills__image' src={npm}/>
      <img className='skills__image' src={json}/>
      <img className='skills__image' src={postman}/>
      <img className='skills__image' src={nodejs}/>
      <img className='skills__image' src={express}/>
      <img className='skills__image' src={mysql}/>
      <img className='skills__image' src={jwt}/>
      <img className='skills__image' src={jest}/>
      <img className='skills__image'src={bootstrap}/>
      <img className='skills__image' src={heroku}/>
      </div>
      </div>

      </section>
  )
}

export default Skills