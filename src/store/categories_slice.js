import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import { rooturl } from '../utils/apis'



export const todoapi=createAsyncThunk("/todod",async()=>{
    const res= await axios.get(`${rooturl}/categories`)
    return res.data
})

const todoslice=createSlice({
    initialState:{data:[],isLoading:false,isError:false},
    name:"todo",
    extraReducers: (builder)=>{
        builder.addCase(todoapi.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(todoapi.fulfilled,(state,action)=>{
          state.data=action.payload
          state.isLoading=false
        })
        builder.addCase(todoapi.rejected,(state)=>{
            state.isError=true;
        })
    }

})

export default todoslice.reducer