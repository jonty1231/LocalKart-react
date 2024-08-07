import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesproductapi } from "../store/productcategories";
import { Link } from "react-router-dom";
import Card from "./Card";

const Categorieslist = ({ data ,lg=" lg:grid-cols-5"}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.productcatog);
  useEffect(() => {
    dispatch(categoriesproductapi(data));
  }, []);
 

  return (
    <>
      <div className="w-full  my-10">
        <div className="flex justify-between">
          {" "}
          <p className="font-extrabold text-2xl">
            BEST {data.toUpperCase()}
          </p>
          <p className="text-blue-600 cursor-pointer">View all 
               </p>
        </div>
        <div className={`   grid  grid-cols-2 md:grid-cols-2 ${lg} gap-2 md:gap-7`}>
          {state.data[data] &&
            state.data[data].products.map((info,index) => {
             
              return (
               <Card  info={info} key={index}/>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categorieslist;
