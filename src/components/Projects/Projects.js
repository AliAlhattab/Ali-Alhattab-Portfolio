import React from 'react'
import './Projects.scss'


function Projects() {
  return (
    <section className='projects'>
        <div className='projects__group1'>
        <video className='projects__video' controls/>
        <p className='projects__text'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        <div className='projects__group2'>
            <p className='projects__text'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <video className='projects__video' controls />
        </div>
        <div className='projects__group1'>
        <video className='projects__video' controls />
        <p className='projects__text'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        <div className='projects__group2'>
            <p className='projects__text'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, 
            accompanied by English versions from the 1914 translation by H. Rackham.</p>
            <video className='projects__video' controls />
        </div>
    </section>
  )
}

export default Projects