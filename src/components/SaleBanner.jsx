import React, { useState } from 'react'

import {Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



const SaleBanner = () => {
    const [img,setimg]=useState(["https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/dff6511cbf3c625e.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/af1914220f55ee30.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a81653ffec97986c.jpg?q=80","https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/8f0276d685199540.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/89f8eeb28f03fe04.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/2ea57ef59b0820b3.jpg?q=20",
        

    ])
  return (
    <div className='  md:px-[1rem] lg:px-[1rem]  '>

<div className=' relative' >
    
           <Swiper

slidesPerView={1}
spaceBetween={0}

    autoplay={{
       delay: 2500,
        disableOnInteraction: false,
      }}
   loop={true}
   grabCursor={true}
   modules={[Autoplay]}
    className="mySwiper">
    { img&& img.map((data,index)=>{return <SwiperSlide key={index}> <div className=''><img src={data} alt=""  className='   h-[5.6rem] md:h-full w-full'/> </div> </SwiperSlide>})}
        
       
      </Swiper>

   <div className='hidden lg:block absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-[#ffffff] p-2 text-[#fa1e1e]'>
   <i className="fa-solid fa-caret-left"></i>
   </div>
<div className={` hidden lg:block  absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-[#ffffff] p-2 text-[#fa1e1e]`}>
<i className="fa-solid fa-caret-right"></i>
</div>
    </div>

    </div>
  )
}

export default SaleBanner