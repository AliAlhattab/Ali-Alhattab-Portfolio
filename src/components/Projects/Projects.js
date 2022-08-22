import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './Projects.scss'

function Projects({slides}) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='projects'>
            <h1 className='projects__title'>Projects</h1>
    <div className='projects__container'>
        
        <FaArrowAltCircleLeft className='projects__left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='projects__right-arrow' onClick={nextSlide}/>
        {SliderData.map((slide, index) => {

                return (
                    <div className={index === current ? 'projects__slide-active' : 'projects__slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='project images' className='projects__image'/>)}
                        
                    </div>
                )
                
        })}
    </div>
    </section>
  )
}

export default Projects