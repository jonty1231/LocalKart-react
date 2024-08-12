import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { rooturl } from '../utils/apis'
import axios from 'axios'


export const search_api=createAsyncThunk("/search",async(query)=>{
    const res= await axios.get(`${rooturl}/search?q=${query}`)
   
    return res.data
})

const searchslice=createSlice({
    name:"search",
    initialState:{data:[],isLoading:false,isError:false},
    extraReducers:(buider)=>{
     buider.addCase(search_api.pending,(state)=>{
        state.isLoading=true
     })
     buider.addCase(search_api.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.isLoading=false
     })
buider.addCase(search_api.rejected,(state,action)=>{
    console.log(action.payload)
    state.isError=true
})
    }
})

export default searchslice.reducer