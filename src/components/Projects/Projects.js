import React from 'react'
import './Projects.scss'
import officequiz from '../../assets/videos/officequiz.mp4'
import wedevelop from '../../assets/videos/wedevelop.mp4'
import brainflix from '../../assets/videos/brainflix.mp4'
import bandsite from '../../assets/videos/bandsite.mp4'


function Projects() {
  return (
    <section className='projects'>
        <div className='projects__group1'>
        <video className='projects__video' controls src={officequiz} type='video/mp4'/>
        <p className='projects__text'>This is a full-stack quiz game based on the show The Office. The application stores players and their scores in MySQL database 
        and then displays their scores from highest to lowest in the leadersboard page to allow for a more competitive feeling to the quiz. </p>
        </div>
        <div className='projects__group2'>
            <p className='projects__text'>This project is a web developer freelancing website that allows you to find or look for freelance web developer work. 
            The application is a CRUD application, that uses both a client side, and server side. the application uses MySQL to store user information and posts. </p>
            <video className='projects__video' controls src={wedevelop} type='video/mp4'/>
        </div>
        <div className='projects__group1'>
        <video className='projects__video' controls src={brainflix} type='video/mp4'/>
        <p className='projects__text'>This project aims to imitate a video streaming application where users can comment, play, and upload videos.</p>
        </div>
        <div className='projects__group2'>
            <p className='projects__text'>This project was a vanilla Javascript project that utilized DOM manipulation. In this project a band "hired" me to make them a website
            to displayed their biography and show dates with a way to buy tickets for there next shows</p>
            <video className='projects__video' controls src={bandsite} type='video/mp4'/>
        </div>
    </section>
  )
}

export default Projects