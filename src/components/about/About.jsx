import React from 'react'
import './about.css'
import ME from'../../assets/jerm.jpg'
import {FaAward} from 'react-icons/fa'
import {FiGithub, FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



function About() {
  return (
    <section id='about'>
      <h5>     Get To Know     </h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>

        </div>

        <div className="about__content">

          <div className="about__cards">
            <article className='about__card' >
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher </small>
            </article>
            <article className='about__card' >
              <FiGithub className='about__icon'/>
              <h5>Github</h5>
              <small><a href="https://github.com/arjun0016">arjun0016</a></small>
            </article>
            <article className='about__card' >
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          I'm a Full Stack Developer building Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>



    </section>
  )
}

export default About