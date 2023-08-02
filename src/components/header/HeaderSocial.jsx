import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin" target='_blank'><BsLinkedin/></a>
        <a href="https://github" target='_blank'><FaGithub/></a>

    </div>
  )
}

export default HeaderSocial