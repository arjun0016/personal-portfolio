import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi';


function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>


      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Creating the visual layout and user interface (UI) of a website</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Implementing the website design using programming <br />languages  such as HTML, CSS, and JavaScript.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>building the server-side of the website or web application. </p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Ensuring that websites are designed and developed to adapt <br />
             and work seamlessly on various devices and screen sizes, <br />
             including desktops, tablets, and smartphones.</p>
          </li>
    

          </ul>
        </article>
      </div>
      
    </section>
  )
}

export default Services