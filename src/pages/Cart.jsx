import React, { useEffect, useState } from 'react'
import { Deletitem, getcart, itemscountad ,itemscountsub} from '../store/Localstoragedata'
import Footer from '../components/Footer'


const Cart = () => {
const [data,setdata]=useState()
const [effect,seteffect]=useState(true)

let num;

 useEffect(()=>{

  const getData = () =>{
    const info=  getcart()
    setdata(info)
  }



  getData()
 
},[effect])


if(data==null || data.length==0){
  return(<>
    <div className='h-screen flex items-center justify-center'>
  <div>
    <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" className='w-2/6 m-auto' />
  {/* <i className="fa-solid fa-cart-arrow-down font-bold text-8xl"></i> */}
 <p className='text-center text-2xl mt-5 font2'>Card is Empty</p>

  </div>
    </div>
    <Footer />
    </> )
}

  
    
num=data &&  data.map((item)=>{
  return item.data.price*item.count
  }).reduce((acc,current)=>acc+current)

 
  return (<>
    <div className=' md:min-h-screen  px-[2rem] lg:px-[5rem] mt-28 md:mt-20 flex  flex-col lg:flex-row gap-10'>
<div className=' lg:w-4/5'>

{ data && data.map((info,index)=>{
    return(
   <div key={index} className='flex items-center  justify-between  p-2 border'>
    <div className='flex  flex-col md:flex-row  md:items-center gap-3'>
    <div className=' overflow-hidden  w-1/2 md:w-[18%] my-2 border-2'><img src={info.data.thumbnail} alt="" className='imgfil'/></div>
    <div>
    <p className='font2 font-bold text-gray-600  '>{info.data.title}</p>
    <p className='font text-gray-600  '>{info.data.category}</p>

    </div>
    </div>
    <div>
<span className='p-2 border cursor-pointer' onClick={()=>{info.count==1?Deletitem( info.data.id):itemscountsub(info.data.id) ,seteffect(!effect) }  } >-</span>
<span className='p-2'>{info.count}</span>
<span className='p-2 border cursor-pointer' onClick={()=>{itemscountad(info.data.id),seteffect(!effect)}}>+</span>

    </div>
    <div className='flex f gap-2 cursor-pointer ml-4 md:m-0'>
   <span> ${ Math.floor(info.data.price * info.count)}</span> 
   
   <span onClick={()=>{Deletitem( info.data.id),seteffect(!effect)}}><i className="fa-solid fa-delete-left"></i></span>

    </div>

   </div>

    )
})

}
</div>
<div className='  lg:fixed top-20 right-10   border lg:w-1/5 flex flex-col justify-center gap-5 items-center p-2 h-3/6 py-10'  >

<p className='font2'> All Items</p>
<div className='flex justify-between w-full'>
  <span>Total Price</span> 
  <span  className='text-green-700'> ${Math.floor(num)} </span>
</div>
<div className='flex justify-between w-full'>
  <span>Total Items</span> 
  <span  className=''> {data && Object.keys(data).length } </span>

</div>
<button className='text-white bg-green-600 p-1.5 px-4 font-bold rounded-md '>Buy Now</button>
</div>

    </div>
    <Footer />
     </>
  )
}

export default Cart