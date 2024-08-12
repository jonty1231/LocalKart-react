import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { search_api } from '../store/search_slice'
import Card from '../components/Card'
import Footer from '../components/Footer'


const Searchpage = () => {
    const navigate =useNavigate()
    const {search} =useParams()
    const dispatch= useDispatch()
    const state =useSelector(state=>state.search)

  useEffect(()=>{
dispatch(search_api(search))
  },[search ])

    console.log(state.data)

if(state.data.limit==0){
    return(
        <div className='h-screen flex flex-col gap-3 justify-center items-center'>
            <p className='text-2xl'>{search}</p>
    <p className='text-4xl font-bold'>Not <span className='text-red-600'>Found !</span></p>  
    <button className='p-1.5 px-5 text-white bg-gray-900 rounded-md' onClick={()=>navigate(-1)}>GO back</button>
        </div>
    )
}

  return (<>
    <div className=' px-6  min-h-[80vh] my-24 md:my-16 lg:px-[5rem]'>
   <div className='flex  justify-between font2 text-xl'>
    <p>Items</p>
    <p>{state.data.limit}</p>
   </div>
   <div className='grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-10'>
  {state.data.products  && state.data.products.map((info,index)=>{
  return  <Card  info={info} key={index}/>
})}
   </div>
  
    </div>
    <Footer />
    </>
  )
}

export default Searchpage