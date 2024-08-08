import React from 'react'

const Footer = () => {

const newdata=[{name:"ABOUT",info:["Contact Us","About Us","Careers","Localkart Store","Press","Corporate information"]}]


  return (
    <div className='bg-[#353232] text-white'>
         <div>
               {
                newdata.map((elm)=>{
                  return(
                    <div>
                <p>{elm.name}</p>
                <div>
                 {elm.info.map((newelm)=> <p> {newelm}</p>)} 
                </div>
               </div>
                  )
                })
               }
       

         </div>
  

    </div>
  )
}

export default Footer