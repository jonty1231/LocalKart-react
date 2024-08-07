import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Autoplay } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Login = () => {
  const [imgs,setimgs]=useState([])
const [showpassword,setshowpassword]=useState(false)

const url=`https://jsonplaceholder.typicode.com/photos`
useEffect(()=>{
const fetchimg=async()=>{
  const res= await axios.get(url)
  setimgs(res.data.filter((info,index)=>index <10))
}
fetchimg() 
},[])
console.log(imgs)

  return (
    <div className=' h-screen flex overflow-hidden gap-5 bg-orange-600'>
     <div className=' hidden md:block w-4/6'>

      <Swiper
       loop={true}
       autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
        effect={'cards'}
         grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {imgs.map((data,index)=> <SwiperSlide className=''><img src={data.url} alt="" className='w-full' /></SwiperSlide>)}
       
       
      
      </Swiper>

     </div>


       <div className=' w-full  md:w-3/6 lg:2/6 flex flex-col justify-center  p-3 md:p-0 lg:p-3' >
       <div className=''>
       <div className='flex justify-center'>       <img src="/logo.png" alt="" className='w-[7rem] h-[7rem] hover:rotate-180 duration-200' />
       </div>

<div className='flex flex-col gap-10 '>
       <div className='flex flex-col gap-2 '>
        <label htmlFor="email">Enter Your Email:</label>
        <input type="email" id="email" placeholder='Email' className=' border-b-[2px] bg-transparent focus:outline-none' />
       </div>
       <div className='flex flex-col gap-2  relative'>
        <label htmlFor="password">Enter Your password:</label>
        <input type={`${showpassword?"text":"password"}`} id="password" placeholder='password' className=' border-b-[2px] bg-transparent focus:outline-none' />
        <i className={`fa-regular ${showpassword?"fa-eye":"fa-eye-slash"}  absolute top-1/2 right-4 cursor-pointer`} onClick={()=>setshowpassword(!showpassword)} ></i>
       </div>
          <div className='flex justify-center'>
            <button className='loginbutton'>Login</button>
          </div>
          </div>
          <div className='flex justify-between mt-4'>
            <Link>Don't have <span className='text-blue-700'>Account</span> ?</Link>
            <Link className='text-blue-700'>Forgot password?</Link>
          </div>
       </div>
     </div>
 
    </div>
  )
}

export default Login