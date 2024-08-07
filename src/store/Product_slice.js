import { createAsyncThunk, createSlice, prepareAutoBatched } from '@reduxjs/toolkit'
import axios from "axios"
import { rooturl } from '../utils/apis'

export const productapi=createAsyncThunk("product",async()=>{
    const res=await axios.get(`${rooturl}`)
    return res.data
})




const productslice=createSlice({
    name:"product",
    initialState:{data:[],isLoading:false,isError:false},
    extraReducers:(builder)=>{
        builder.addCase(productapi.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(productapi.fulfilled,(state,action)=>{
            state.data=action.payload
            state.isLoading=false
        })
        builder.addCase(productapi.rejected,(state,action)=>{
            console.log(action.payload)
            state.isError=true
        })
    }
})

export default productslice.reducer