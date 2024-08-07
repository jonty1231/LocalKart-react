import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import { rooturl } from "../utils/apis"
import { act } from "react"

export const singleproductapi=createAsyncThunk("/poduct/id",async(id)=>{
    const res= await axios.get(`${rooturl}/${id}`)
     return res.data
})

const productslice=createSlice({
    name:"singleproduct",
    initialState:{data:[],isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(singleproductapi.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(singleproductapi.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.isLoading=false
        })
        builder.addCase(singleproductapi.rejected,(state,action)=>{
            console.log(action.payload)
            state.isError=true

        })
    }
})

export default productslice.reducer