import React from 'react'
import './Back.scss'
import { NavLink } from 'react-router-dom'

export default function Back() {
  return (
    <section className='back'>
       <NavLink to='/' className='back__link'><p className='back__text'> ← Back</p></NavLink>
    </section>
    
  )
}
