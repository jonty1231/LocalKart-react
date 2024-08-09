import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Card = ({info}) => {
const [skelotenimg,setseloctionimg]=useState("./loder.png")

  const navigation=useNavigate()
const handelNavigaion=(info)=>{
navigation(`/product/${info}`)
}

useEffect(()=>{
setTimeout(() => {
  setseloctionimg("")
}, 500);

},[ ])
 
  return (
    <div onClick={()=>handelNavigaion(info.title.split(' ').join("-"))}  className="   flex flex-col  relative border-2 rounded-md  shadow-gray-500 duration-300 mt-5   card cursor-grab active:cursor-grabbing">
                  <p
                    className={`absolute top-1 right-5 z-10 text-sm ${
                      info.availabilityStatus == "In Stock"
                        ? "text-green-600"
                        : "text-red-600"
                    }   `}
                  >
                    {info.availabilityStatus}
                  </p>

                  <div className={`h-[9rem] flex justify-center  `}>
                    <img
                      src={ skelotenimg ||  info.thumbnail}
                      alt=""
                      className={`  ${skelotenimg?"w-1/3 h-1/3 mt-10 ":"h-full w-full"}   duration-300`}
                    />
                  </div>
                  <div className="flex flex-col md:gap-2 px-[1px] md:px-5 py-2   ">
                    <p className="text-center text-xl font2 font-bold overflow-hidden whitespace-nowrap w-full text-ellipsis ">
                      {info.title}
                    </p>
                    <div className=" overflow-hidden whitespace-nowrap w-full text-ellipsis ">
                      {info.description}
                    </div>
                    <div className="flex justify-between">
                      <p>
                        <i className="fa-regular fa-star-half-stroke text-orange-500"></i>{" "}
                        {info.rating}
                      </p>
                      <p>$ {info.price}</p>
                    </div>

                  
                  </div>
                </div>
  )
}

export default Card