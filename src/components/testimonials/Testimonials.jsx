import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/jerm.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
{
  avatar:AVTR1,
  name:"jermy",
  review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem fugit, maiores molestias veritatis porro quia aperiam optio corrupti vel nulla maxime impedit deserunt incidunt, laborum magnam ipsa. Id, perspiciatis"
},
{
  avatar:AVTR1,
  name:"jermy",
  review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem fugit, maiores molestias veritatis porro quia aperiam optio corrupti vel nulla maxime impedit deserunt incidunt, laborum magnam ipsa. Id, perspiciatis"
},
{
  avatar:AVTR1,
  name:"jermy",
  review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem fugit, maiores molestias veritatis porro quia aperiam optio corrupti vel nulla maxime impedit deserunt incidunt, laborum magnam ipsa. Id, perspiciatis"
},
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        
      { 
       data.map(({avatar,name,review} , index) => {
        return(

        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">

          <img src={avatar} alt="" />
          </div>

          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
        )

        })
        }
       
      
      </Swiper>



    </section>
  )
}

export default Testimonials