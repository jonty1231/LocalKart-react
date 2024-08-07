import React, { useEffect } from "react";

import "swiper/css";

const Categories = () => {
const catogriesdata=[
  
{categories:"FRAGRANCES",img:"https://pebblely.com/ideas/perfume/use-water.jpg"},
{categories:"BEAUTY",img:"https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg"},
{categories:"GROCERIES",img:"https://www.shutterstock.com/image-illustration/shopping-basket-full-variety-grocery-260nw-1978733351.jpg"},
{categories:"LAPTOPS",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3QkaJLoCpEYNuDKMQN4kOmag08r_1Ewu0Q&s"},
{categories:"SUNGLASSES",img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d070031918307.5666c73cbbf3a.jpg"},
{categories:"TABLETS",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xlGhxQFDIFXqg7mnyprknF-Jg1o4koU7HA&s"},
{categories:"MOTORCYCLE",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxoyQI6_NadGWQSKcFXq8NgWhcms96p0SKw&s"},
{categories:"TOPS",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCT-Z-yFIpHRO37UKJPmWq1539xy3T7mzmA&s"}]

  return (
   <div className="flex mt-28 md:mt-20 justify-center items-center gap-3  lg:gap-16 lg:px-[5rem]">

{catogriesdata.map((info,index)=>{
  return(
    <div key={index} className="  w-[2.5rem] md:w-[4.5rem] lg:w-[4.5rem] h-[6rem] md:h-[8rem]">
<img src={info.img} alt=""  className=" lg:w-full h-2/5 md:h-3/5 rounded-full "/>
<p className=" mt-3 text-center lg:font2 text-[0.5rem] md:text-[0.8rem]">{info.categories}</p>
    </div>
  )
})}

   </div>

  );
};


export default Categories;
