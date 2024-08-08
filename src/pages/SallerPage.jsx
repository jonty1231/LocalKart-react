import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SallerPage = () => {
const [loginstate,setloginstate]=useState(false)


  return (
    <div className='min-h-screen flex justify-center items-center  mt-28 md:mt-20 bg-black' >

<div className={` morf border-2 w-2/6 p-5 ${loginstate?"scale-0 rotate-180" :"scale-100"} origin-center duration-500`}>
  <p className='font2 tracking-[0.7rem]	 my-6 text-2xl text-center'>Local-Kart</p>
  <div className='flex flex-col gap-2 my-2 '>
    <label htmlFor="name">Full Name</label>
    <input type="text" name="name" id="name" placeholder='Full Name' className='border-b-2'/>
  </div>
  <div className='flex flex-col gap-2 my-2'>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder='Email' className='border-b-2'/>
  </div>
  <div className='flex flex-col gap-2 my-2'>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder='Password' className='border-b-2'/>
  </div>
  <div className='flex flex-col gap-2 my-2'>
    <label htmlFor="confirm-password">Confirm Password</label>
    <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Password' className='border-b-2'/>
  </div>
<div className='my-2'> 
    <p>Gender</p>
    <div className='flex justify-between'> 
        <div>
            <input type="radio" name="gender" id="male" value="male"  />
            <label htmlFor="male" className='mx-2'>Male</label>
        </div>
        <div>
            <input type="radio" name="gender" id="female" value="female"  />
            <label htmlFor="female" className='mx-2'>Female</label>
        </div>
        <div>
            <input type="radio" name="gender" id="other" value="other"  />
            <label htmlFor="other" className='mx-2'>Other</label>
        </div>
    </div>
</div>

<div>
    <input type="checkbox" name="check" id="" />
    <Link to="/" className='mx-2 text-blue-700'>Termes & Conditions</Link>
</div>
  <div className='text-center my-2 '>
    <button className='text-white font-bold  p-1.5 rounded-sm bg-blue-700 px-5'>Signup</button>
  </div>
<div className='text-end ' > 
    <span className='cursor-pointer' onClick={ ()=>setloginstate(true)}>
    Have a Account ? <span className='text-blue-700'> Login</span></span>
</div>

</div>

<div className={` morf absolute top-1/3 border-2 w-2/6 p-5 ${!loginstate?"scale-0 -rotate-180" :"scale-100"} origin-center duration-500`}>
  <p className='font2 tracking-[0.7rem]	 my-6 text-2xl text-center'>Local-Kart</p>
 
  <div className='flex flex-col gap-2 my-2'>
    <label htmlFor="email">Email</label>
    <input type="email" name="email" id="email" placeholder='Email' className='border-b-2'/>
  </div>
  <div className='flex flex-col gap-2 my-2'>
    <label htmlFor="password">Password</label>
    <input type="password" name="password" id="password" placeholder='Password' className='border-b-2'/>
  </div>
 



  <div className='text-center my-2 '>
    <button className='text-white font-bold  p-1.5 rounded-sm bg-blue-700 px-5'>Login</button>
  </div>
<div className='text-end ' > 
    <span className='cursor-pointer' onClick={ ()=>setloginstate(false)}>
    Don't Have a Account ? <span className='text-blue-700'>Signup</span></span>
</div>

</div>
    </div>
  )
}

export default SallerPage