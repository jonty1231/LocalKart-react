
import React from 'react'

const Footer = () => {

const newdata=[{name:"ABOUT",info:["Contact Us","About Us","Careers","Localkart Store","Press","Corporate information" ]},{name:"GROUP COMPANIES",info:["Myntra","Cleartrip","Shopsy"]},{name:"HELP",info:["Payments","Shipping","Cancelltion & Returns","FAQ",""]},{name:"CONSUMER POLICY",info:["Cancelltion & Returns", "Terms & Use","Security","Privacy","Sitemap"]},{name:"MAIL US",info:["Flipkart Internet Privet Limited,","Building Alyssa , Begonia &","Clove Embassy Tech village"]}]


  return (
    <div className='bg-[#181717] text-white px-4'>
         <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
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
  <div >
    <p className='text-sm'><i className="fa-solid fa-store text-orange-400 mx-3 " ></i> Become a Seller</p>



  </div >

    </div>
  )
}

export default Footer