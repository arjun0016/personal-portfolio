import React from 'react'
import './projects.css'
import IMG1 from '../../assets/Music Player.png'
import IMG2 from '../../assets/Restaurant Listing.png'
import IMG3 from '../../assets/Travel.png'
import IMG4 from '../../assets/Netflix.png'


const data =[
{
  id: 1,
  image:IMG1,
  title:'Music PLayer',
  github:'https://github.com/arjun0016/Music-Player-App.git',
  demo:'https://musicplayer0016.netlify.app/' 
},
{
  id: 2,
  image:IMG2,
  title:'Restaurant Listing',
  github:'https://github.comhttps://github.com/arjun0016/Restaurant-Listing_App.git',
  demo:'https://restaurant-listing0016.netlify.app/'
},
{
  id: 3,
  image:IMG3,
  title:'Travel',
  github:'https://github.com/arjun0016/Travel-Blog-Design.git',
  demo:'https://travalbolg0016.netlify.app/'
},
{
  id: 4,
  image:IMG4,
  title:'Netflix clone Page',
  github:'https://github.com/arjun0016/Netflix-clone.git',
  demo:'demo'
  
},
]

function Portfolio() {
  return (
    <section >
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo}) =>{
          return(
            
           <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt="" />
            </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary'>Live  Demo</a>
              </div>
          </article>
          
          )
        })
       }      
      </div>
    </section>
  )
}

export default Portfolio