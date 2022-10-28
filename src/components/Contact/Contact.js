import React from "react";
import './Contact.scss'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'

function Contact() {
  return (
    <section className="contact">
        <div className="contact__container"> 
      <p className="contact__title">Ali Alhattab</p>
      <a className="contact__link" href="https://www.linkedin.com/in/alialhattab/" target='blank'>
        <div className="contact__group">
        <img className="contact__image" src={linkedin} alt='LinkedIn Logo'/>
        <p className="contact__text">LinkedIn</p>
      </div>
      </a>
      <a className="contact__link"  href="https://github.com/AliAlhattab" target='blank'>
      <div className="contact__group">
        <img className="contact__image2" src={github} alt='GitHub Logo'/>
        <p className="contact__text">GitHub</p>
      </div>
      </a>
      <p className="contact__text">Ali.Al.Alhattab@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
