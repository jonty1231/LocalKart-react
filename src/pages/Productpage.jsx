import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleproductapi } from "../store/Single_product";
import Loder from "../components/Loder";

import Categorieslist from "../components/Categorieslist";
import { addcart} from "../store/Localstoragedata";
import { titleapi } from "../store/title.id_slice";

const Productpage = () => {
  const param = useParams().id;
  const dispatch = useDispatch();
const [showreview,setshowreview]=useState(false)

  const state = useSelector((state) => state.singleproduct);
const allstate=useSelector((state)=>state.titles)
  const { images,title,description,thumbnail,price,discountPercentage,rating,minimumOrderQuantity,shippingInformation,warrantyInformation,returnPolicy,reviews,category} = state.data;
  const [mainimg, setmainimg] = useState("");

  useEffect(() => {
          dispatch(titleapi())
          const newtitle=param.split("-").join(" ")
          const apihandel=async()=>{
            const datainfo= await allstate.data.products.filter((info)=>info.title==newtitle)
            console.log(datainfo[0])
                   dispatch(singleproductapi(datainfo[0].id));
          }
          apihandel()
    // 
 
  }, [param]);

// console.log(allstate.data.products)
if(state.isLoading){
  return(
   <Loder />
  )
}

  return (  
    <div className=" px-[1.4rem]  md:px-[5rem] mt-28 md:mt-20 flex flex-col lg:flex-row gap-10 items-center relative">
      <div className="  lg:w-[150rem] relative">
      <div className="flex gap-2 lg:fixed  top-24">
        <div>
          {images && images.map((info,index) => {
            return (
              <div key={index}
                className="border-2  p-1 rounded-full w-[50px]  my-3 cursor-pointer"
                onClick={() => setmainimg(info)}
              >
                <img src={info} alt=""  className=" "/>
              </div>
            );
          })}
        </div><div>
        <div className=" shadow-gray-400 shadow-sm  relative md:w-[350px]">
      <img src={mainimg?mainimg:thumbnail} alt="" className="   md:h-[350px] imgfil" /> 
      <i className="fa-regular fa-heart absolute top-3 right-3 text-lg"></i>


  </div>
      <div className="flex text-center justify-between mt-4  gap-3">
<button className="p-2 px-5 bg-green-700 text-white font-bold rounded-md  w-3/6 " >Buy Now</button>
<button className="p-2 px-5 bg-red-700 text-white font-bold  rounded-md w-3/6" onClick={()=>addcart(state.data)}>Add to Cart</button>
</div>
        </div>
        
      </div>
      </div>

      <div className="flex flex-col gap-3 h-screen ">
  <p className="text-2xl font2">{title}</p>
<p className="w-5/6 text-gray-600">{description}</p>
 <div className="flex gap-4"><p className="text-xl">${price}</p> <del className="text-gray-500 text-sm">${Math.round((price*discountPercentage/100)+price)}</del>      <p className="font2 text-green-600">-{discountPercentage}% off</p> </div>
<div className="flex gap-10">
  <p className="flex items-center gap-1">Rating:  <i className="fa-regular fa-star-half-stroke text-orange-600"></i> {rating}</p>
     <span>minimum Order Quantity : {minimumOrderQuantity}</span>
</div>
<div>
  <p>.{warrantyInformation}</p>
  <p>.{shippingInformation}</p>
  <p>.{returnPolicy}</p>
</div>
<div>
  <p onClick={()=>setshowreview(!showreview)} className="cursor-pointer text-blue-600">{showreview?"  Hide reviews":"Show reviews"}</p>
{showreview && reviews && reviews.map((info)=>{
  return (
    <div className="mt-2">
      <p className="text-gray-500 text-sm">{info.reviewerName}</p>
      <p className="ms-10 flex gap-3"><span>{info.comment} </span> <span>Rating: {info.rating}</span></p>
    </div>
  )
})}


</div>



  { category && <Categorieslist  data={category} lg="md:grid-cols-3 lg:grid-cols-3"/>}

      </div>




    </div>
  );
};

export default Productpage;
