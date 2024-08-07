import React from 'react'
i

const Slidercomponent = ({data,slidernumber=1,spaceBetween=0,Code}) => {

  return (
    <div className='w-screen lg:px-[7rem]'>
           <Swiper

slidesPerView={slidernumber}
spaceBetween={spaceBetween}

    autoplay={{
       delay: 2500,
        disableOnInteraction: false,
      }}
   loop={true}
   grabCursor={true}
   modules={[Autoplay]}
    className="mySwiper">
    { data && data.map((data)=>{return <SwiperSlide> <Code>okk</Code> </SwiperSlide>})}
        
       
      </Swiper>

    </div>
  )
}

export default Slidercomponent