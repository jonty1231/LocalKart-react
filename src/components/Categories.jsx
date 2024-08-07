import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoapi } from "../store/categories_slice";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(todoapi());
  }, []);

  return (
    <div className=" my-10 px-2 md:px-10 lg:px-[7rem] pt-[5rem]">
      <Swiper
        slidesPerView={10}
        spaceBetween={100}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        // modules={[Autoplay]}
        className="mySwiper"
      >
        {state.data &&
          state.data.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                {" "}
                <Slider data={data} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
const Slider = ({ data }) => {
  return (
    <div className=" overflow-hidden w-32 ">
      <p className="whitespace-nowrap ">{data.name}</p>
    </div>
  );
};

export default Categories;
