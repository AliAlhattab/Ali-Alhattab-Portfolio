import React from 'react'
import './Projects.scss'


function Projects() {

  return (
    <section className='projects'>
        <div className='projects__group1'>
        <video className='projects__video' controls src='https://d3enjmme2vbs8a.cloudfront.net/officequiz.mp4' type='video/mp4'/>
        <p className='projects__text'>This is a full-stack quiz game based on the show The Office. The application stores the player's name and score in MySQL database and 
        then display them from highest to lowest on the leaderboard page to allow for a more competitive feeling to the quiz. </p>
        </div>
        <div className='projects__group2'>
            <p className='projects__text'>This project is a web developer freelancing website that allows you to find or look for freelance web developer work. 
            The application is a CRUD application, that uses both a client side, and server side. the application uses MySQL to store user information and posts. </p>
            <video className='projects__video' controls src='https://d3enjmme2vbs8a.cloudfront.net/wedevelop.mp4' type='video/mp4'/>
        </div>
        <div className='projects__group1'>
        <video className='projects__video' controls src='https://d3enjmme2vbs8a.cloudfront.net/brainflix.mp4' type='video/mp4'/>
        <p className='projects__text'>This project aims to imitate a video streaming application where users can comment, play, and upload videos.
        The back-end uses JSON to store the comments, videos and newly uploaded videos.</p>
        </div>
        <div className='projects__group2'>
            <p className='projects__text'>This project was a vanilla Javascript project that utilized DOM manipulation. In this project a band "hired" me to make them a website
            to displayed their biography and show dates with a way to buy tickets for there next shows</p>
            <video className='projects__video' controls src='https://d3enjmme2vbs8a.cloudfront.net/bandsite.mp4' type='video/mp4'/>
        </div>
    </section>
  )
}

export default Projects