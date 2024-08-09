
import React from 'react'

const Footer = () => {

const newdata=[{name:"ABOUT",info:["Contact Us","About Us","Careers","Localkart Store","Press","Corporate information" ]},{name:"GROUP COMPANIES",info:["Myntra","Cleartrip","Shopsy"]},{name:"HELP",info:["Payments","Shipping","Cancelltion & Returns","FAQ",""]},{name:"CONSUMER POLICY",info:["Cancelltion & Returns", "Terms & Use","Security","Privacy","Sitemap"]},{name:"MAIL US",info:["Flipkart Internet Privet Limited,","Building Alyssa , Begonia &","Clove Embassy Tech village"]}]


  return (
    <div className='bg-[#181717] text-white px-4'>
         <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
               {
                newdata.map((elm)=>{
                  return(
                    <div>
                <p className='text-sm my-3 text-gray-600'> {elm.name}</p>
                <div>
                 {elm.info.map((newelm)=> <p className='text-sm font-bold hover:underline cursor-pointer '> {newelm}</p>)} 
                </div>
               </div>
                  )
                })
               }
       

         </div>
  <div  className='p-3 border-t-2 hidden md:flex justify-around ' >
    <p className='text-sm'><i className="fa-solid fa-store text-orange-400 mx-2 " ></i> Become a Seller</p>
    <p className='text-sm'><i className="fa-solid fa-star text-orange-400 mx-2 " ></i> Adverise</p>
    <p className='text-sm'><i className="fa-solid fa-gift text-orange-400 mx-2 " ></i> Gift Cards</p>
    <p className='text-sm'><i className="fa-regular fa-circle-question text-orange-400 mx-2 " ></i> Help Center</p>
    <p className='text-sm'> &copy; 2024-∞ Localkart.com</p>
<div >
<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods" />
</div>

  </div >

    </div>
  )
}

export default Footer