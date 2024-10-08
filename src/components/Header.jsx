
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { productapi } from "../store/Product_slice";


const Header = () => {
const [showNav,setshowNav]=useState(false)

const [serachItem,setserachItem] = useState(undefined)
const navigate=useNavigate()
   const dispatch=useDispatch()
   const state=useSelector(state=>state.titles)


const search_handel=(e)=>{
  if(e.key=="Enter"){
    if(serachItem){
      setserachItem("")
    navigate(`/${serachItem}`)

    }
    else{
    toast.error("enter valid data")

     
    }
  }
  
}
useEffect(()=>{
  dispatch(productapi())

 
},[ ])


const handelNavigaion=(info)=>{

navigate(`/product/${info}`)

setserachItem("")


}

  return (<div>
    <div className="shadow-md py-1 fixed  w-full top-0 z-50 bg-white  ">
      <div className=" flex    px-4 md:px-10 lg:px-[8rem] justify-between items-center gap-10 lg:gap-16">
      <i className={`fa-solid  ${showNav?"fa-xmark":"fa-bars"} text-2xl  md:hidden `} onClick={()=>setshowNav(!showNav)}></i>
        <Link to="/" className="flex gap-4 items-center">
        

          <img
            src="/logo.svg"
            alt=""
            className=""
          />
        </Link>
       {serachItem && <div className="hidden md:flex absolute top-12 left-[25%] bg-white rounded-sm   flex-col  max-h-[70vh]  overflow-auto w-1/3">
        { state.data.products && state.data.products.filter((info)=>{
          const searchitm=serachItem.toLowerCase()
          const fullnamme=info.title.toLowerCase()
return  serachItem && fullnamme.startsWith(searchitm)
         }).map((item,index)=>{return(
          <div key={index} className="m-2 cursor-pointer border-b-[1px] border-[#b1abab54]" onClick={()=>handelNavigaion(item.title.split(' ').join("-"))}>
            {item.title}
          </div>
        )}) }
       </div>}
      
        <label
          htmlFor="navsearch"
          className="bg-[#e0e0e0] w-3/6 p-1 rounded-md gap-1 items-center hidden md:flex"
        >
          <i className="fa-solid fa-magnifying-glass text-lg text-gray-400"></i>
          <input
            type="text"
            id="navsearch"
            name="serach"
            value={serachItem}
            onChange={(e)=>setserachItem(e.target.value)}
            onKeyDown={(e)=>search_handel(e)}
            placeholder="Search for Products,brands and More"
            className="bg-transparent w-5/6  focus:outline-none "
            
          />
        </label>
      
        <div className="flex gap-2 md:gap-5 items-center text-gray-900">
          <i className="fa-solid fa-mobile-screen md:hidden"></i>
          <div className="flex h-full group hovernavparrent items-center gap-1 hover:bg-blue-700 hover:text-white text-md relative rounded-lg p-2 duration-200">
            <Link to="/login" className="flex items-center gap-1 " >
            <i className="fa-regular fa-user"></i>
            <p
              data-value="Login"
              className=" relative hovernav overflow-hidden hover:after:text-white "
                >
          
              <span className=" opacity-0 ">Login</span>
            </p>
            <i className="fa-solid fa-angle-down group-hover:rotate-180 duration-200 hidden md:block"></i>
            </Link>
            <div className="hidden md:block absolute top-[2.6rem] scale-0 group-hover:scale-100 origin-top-left duration-300 w-[15rem] p-4 left-0 bg-white rounded-md shadow-md text-black -translate-x-1/3 lg:translate-x-0">
              <div className="flex justify-between border-b-[2px] border-[#808080d0]"> <p>New customer?</p> <a href="#" className="text-blue-700">Sign up</a></div>
              <div className="flex flex-col gap-3 mt-2" >
              <div className="flex gap-3 items-center"><i className="fa-regular fa-user"></i><p>My Profile</p></div>
              <div className="flex gap-3 items-center"><i className="fa-solid fa-burst"></i><p>Localkart plus zone</p></div>
              <div className="flex gap-3 items-center"><i className="fa-solid fa-box-open"></i><p>Orders</p></div>
              <div className="flex gap-3 items-center"><i className="fa-regular fa-heart"></i><p>Wishlist</p></div>
              <div className="flex gap-3 items-center"><i className="fa-solid fa-gift"></i> <p>Rewards</p></div>
              <div className="flex gap-3 items-center"><i className="fa-regular fa-credit-card"></i><p>Gift card</p></div>
              </div>
            </div>
          </div>
          <Link to="/cart" className="flex hovernavparrent items-center gap-2 text-md ">
            <i className="fa-solid fa-cart-shopping"></i>
            <p
              data-value="Carts"
              className=" relative hovernav overflow-hidden hidden lg:block"
             >
              {" "}
              <span className="opacity-0">Carts</span>
            </p>
          </Link>
          <Link  to="/saller" className=" hovernavparrent items-center gap-2 text-md hidden md:flex ">
            <i className="fa-solid fa-store"></i>
            <p
              data-value="Become a Seller"
              className=" relative hovernav overflow-hidden hidden lg:block h-[25px] "
            >
          
              <span className="opacity-0 uppercase font2"> Become a Seller </span>
            </p>
          </Link>
          <div className="hidden md:block  ">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
      <div className=" md:hidden  relative ">
      {serachItem && <div className="absolute top-[105%] left-[10%] bg-white max-h-[70vh]  overflow-auto  rounded-sm  flex flex-col  ">
        { state.data.products && state.data.products.filter((info)=>{
          const searchitm=serachItem.toLowerCase()
          const fullnamme=info.title.toLowerCase()
return  serachItem && fullnamme.startsWith(searchitm)
         }).map((item,index)=>{return(
          <div key={index} className="m-2 cursor-pointer border-b-[2px] border-[#808080d0]" onClick={()=>handelNavigaion(item.title.split(' ').join("-"))}>
            {item.title}
          </div>
        )}) }
       </div>}
        <label
          htmlFor="navsearch2"
          className="bg-[#e0e0e0b2]  p-1 rounded-md gap-1 items-center block  w-[95%]  m-auto"
        >
          <i className="fa-solid fa-magnifying-glass text-lg text-gray-400"></i>
          <input
                type="text"
                
                name="serach"
                value={serachItem}
           onChange={(e)=>setserachItem(e.target.value)}
                onKeyDown={(e)=>search_handel(e)}
            id="navsearch2"
            placeholder="Search for Products,brands and More"
            className="bg-transparent   focus:outline-none  w-5/6"
          />
        </label>
       
      </div>
      <Nav_screen   classs={showNav} classs2={setshowNav}/>
    </div>

  <Outlet />
  
    </div>
  );
};

const Nav_screen=( {classs,classs2})=>{
  return( 
    <div className={`h-screen w-full flex flex-col items-center justify-center gap-10 text-white bg-[#000000e8] absolute top-20 ${classs?"left-0":"-left-full"}  text-2xl font2 duration-300`}>
  <Link to="/" onClick={()=>classs2(false)}>
  Home
  </Link>
  <Link to="/cart" onClick={()=>classs2(false)}>
  Cart</Link>
  <Link to="/saller" onClick={()=>classs2(false)}>Saller</Link>
  <Link to="/login" onClick={()=>classs2(false)}>
  Login
  </Link>
    </div>
  )
}


export default Header;
