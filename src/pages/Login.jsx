import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {Autoplay } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Login = () => {
  const catogriesdata=[
  
   
    {categories:"BEAUTY",img:"https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg"},
 
  
    {categories:"SUNGLASSES",img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d070031918307.5666c73cbbf3a.jpg"},
    {categories:"perfume",img:"https://images.unsplash.com/photo-1530745342582-0795f23ec976?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {categories:"shop",img:"https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {categories:"toys",img:"https://images.unsplash.com/photo-1613734086935-4cd1a02e9256?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
 

  ]


 
const [showpassword,setshowpassword]=useState(false)




  return (
    <div className=' h-screen flex overflow-hidden gap-5 relative justify-center items-center'>
     <div className=' hidden md:block w-full absolute top-0 h-full -z-10 left-0 '>

      <Swiper
       loop={true}
       autoplay={{
        delay: 1000,
        // disableOnInteraction: false,
      }}
        effect={'cards'}
         grabCursor={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {catogriesdata.map((data,index)=> <SwiperSlide className=''><img src={data.img} alt="" className=' w-full  ' /></SwiperSlide>)}
       
       
      
      </Swiper>

     </div>

     <div className=' morf md:w-1/2 xl:w-1/3 flex flex-col justify-center  p-3 ' >
       <div className=''>
       <div className='flex  w-full my-10'>       <img src="/logo.svg" alt="" className='duration-200  relative  m-auto ' />
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
            <button className=' p-3 px-10 font-bold overflow-hidden hover:text-blue-800 duration-300 rounded-lg bg-white text-black relative hoverbutton '>Login</button>
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