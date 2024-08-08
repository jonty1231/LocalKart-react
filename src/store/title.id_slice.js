import {createAsyncThunk,createSlice} from"@reduxjs/toolkit"
import { rooturl } from "../utils/apis"
import axios from "axios"



export const titleapi=createAsyncThunk("api/title",async()=>{
const res=await axios.get( `${rooturl}?limit=200&skip=0&select=title,id`)
// console.log(res.data.products)
return res.data

})

const titleSlice=createSlice({
    initialState:{data:[],isLoading:false,isError:false},
    name:"title-id",
    extraReducers: (builder)=>{
        builder.addCase(titleapi.pending,(state)=>{
            state.isLoading=true;
        })
        builder.addCase(titleapi.fulfilled,(state,action)=>{
          state.data=action.payload
          state.isLoading=false
        })
        builder.addCase(titleapi.rejected,(state)=>{
            state.isError=true;
        })
    }

})

export default titleSlice.reducer