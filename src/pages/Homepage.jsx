import React from 'react'

import Categories from '../components/Categories'
import SaleBanner from '../components/SaleBanner'
import Producte_with_categories from '../components/Producte_with_categories'

const Homepage = () => {

  return ( 
    <div className='  '>
      <Categories />
  <SaleBanner  />
   <Producte_with_categories />


    </div>
  )
}

export default Homepage