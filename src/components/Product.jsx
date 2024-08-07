import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { productapi } from '../store/Product_slice'



const Product = () => {
const dispatch=useDispatch()
const state=useSelector((state)=>state.product)

useEffect(()=>{
    dispatch(productapi())
},[])

console.log(state.data.products)
if(state.isLoading){
    return(
        <p>Loading</p>
    )
}

  return (
    <div className='grid grid-cols-6'>
{ state.data.products && state.data.products.map((data)=>{
  <div> okk</div>
})}

    </div>
  )
}

export default Product