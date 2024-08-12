import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoapi } from "../store/categories_slice";
import { categoriesproductapi } from "../store/productcategories";
import Categorieslist from "./Categorieslist";
import Loder from "./Loder";

const Producte_with_categories = () => {
  const state = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoapi());
  }, []);

  if (state.isLoading) {
    return <Loder />;
  }

  return (
    <div className=" px-6 md:px-10 lg:px-[2rem]   ">
      {state.data.map((info, index) => (
        <Categorieslist data={info.slug} key={index} />
      ))}
    </div>
  );
};

export default Producte_with_categories;
