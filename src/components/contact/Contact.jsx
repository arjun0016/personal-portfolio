import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6fl8op', 'template_7qk9jig', form.current, 'CCdujmNOOWWR1EEcX')
    e.target.reset();
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>arjunpknr0016@gmail.com</h5>
          <a href="mailto:arjunpknr0016@gmail.com" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+91 9633170016</h5>
          <a href="https://wa.me/919633170016" target='_blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <BsLinkedin className='contact_option-icon'/>
          <h4>Linkedin</h4>
          <h5>Arjun P</h5>
          <a href="https://linkedin.com/in/arjun-p-4886b4223" target='_blank'>Send a message</a>
        </article>

      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="" placeholder='Your Full Name' required/>
        <input type="email" name="email" id=""placeholder='Your Email' required />
        <textarea name="message" id="" placeholder='Your Message' rows="7" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>

    </div>
    </section>
  )
}

export default Contact