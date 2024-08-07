import { createAsyncThunk, createSlice, prepareAutoBatched } from '@reduxjs/toolkit'
import axios from "axios"
import { rooturl } from '../utils/apis'

export const categoriesproductapi=createAsyncThunk("catogriesproduct",async(data)=>{
    const res=await axios.get(`${rooturl}/category/${data}`)
  
    // console.log(res.data)
    return {data : res.data,item:data}
})




const categoriesproductslice=createSlice({
    name:"categoriesproduct",
    initialState:{data:{},isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(categoriesproductapi.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(categoriesproductapi.fulfilled,(state,action)=>{
            state.data[action.payload.item]=action.payload.data
            state.isLoading=false
        })
        builder.addCase(categoriesproductapi.rejected,(state,action)=>{
            console.log(action.payload)
            state.isError=true
        })
    }
})

export default categoriesproductslice.reducer