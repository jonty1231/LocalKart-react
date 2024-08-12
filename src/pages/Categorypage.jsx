import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { rooturl } from '../utils/apis'
import Loder from '../components/Loder'
import Card from '../components/Card'
import Footer from '../components/Footer'


const Categorypage = () => {
const {cato} =useParams()
const [data,setdata]=useState( )
const [loder,setloder]=useState(false)
useEffect(()=>{
const handel_api=async()=>{
  setloder(true)
  const res= await axios.get(`${rooturl}/category/${cato}`)
  setdata(res.data)
  setloder(false)

}
handel_api()
},[ ])

if(loder){
  return(
    <Loder />
  )
}

  return (
    <>
    <div className=' px-6  min-h-[80vh] my-24 md:my-16 lg:px-[5rem]'>
   <div className='flex  justify-between font2 text-xl'>
    <p>Items</p>
    <p>{data && data.limit}</p>
   </div>
   <div className='grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-10'>
  {data  && data.products.map((info,index)=>{
  return  <Card  info={info} key={index}/>
})}
   </div>
  
    </div>
    <Footer />
    </>
  )
}

export default Categorypage