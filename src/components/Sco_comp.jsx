import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { titleapi } from '../store/title.id_slice'
import { Link } from 'react-router-dom'
const Sco_comp = () => {
 const dispatch=useDispatch()
 const state=useSelector(state=>state.titles)

useEffect(()=>{
dispatch(titleapi())

},[])

  return (
    <div>
 <div className=' bg-[#54555017] p-2 my-4'>
    { state.data.products && state.data.products.map((items,index)=>{
        return(
           <span key={index}>
            <Link key={index} className='text-sm text-gray-600'>{items.title}</Link> <span className='mx-1 text-lg'> | </span>
            </span>
        )
    }) }
 </div>


    </div>
  )
}

export default Sco_comp