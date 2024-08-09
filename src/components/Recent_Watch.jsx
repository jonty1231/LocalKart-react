import React, { useEffect, useState } from 'react'
import { deletwatch, recentwatch } from '../store/Localstoragedata'
import Card from './Card'
deletwatch
const Recent_Watch = () => {
 const [watched,setwatched]=useState( )
 const [hook,sethook]=useState(false)
useEffect(()=>{
setwatched(recentwatch())
},[ hook])

  return ( <>
{watched && watched.length >0 &&
    <div className='px-6 md:px-10 lg:px-[2rem] '>
  <p className='text-3xl font-bold font2'>Recent Watched</p>
        <div className='grid  grid-cols-2  lg:grid-cols-5 gap-5'>

{watched && watched.map((info,index)=> <Card key={index} info={info}  delet={true}/>) }
</div>
 <i className="fa-solid fa-trash-can relative top-1 left-1 text-[#c56f6f] cursor-pointer  z-50 " onClick={()=>{deletwatch(),sethook(!hook)}}></i>
    </div>}
    
    </>
  )
}

export default Recent_Watch