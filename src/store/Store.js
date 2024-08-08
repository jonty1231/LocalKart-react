import { configureStore } from "@reduxjs/toolkit"
import categories from "./categories_slice"
import product from "./Product_slice"
import productcatog from "./productcategories"
import singleproduct from "./Single_product"
import titles from "./title.id_slice"
export const store = configureStore({
    reducer: {
        categories,
        product,
        productcatog,
        singleproduct,
        titles
    }

})


