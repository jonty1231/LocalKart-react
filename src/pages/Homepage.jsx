import React from 'react'

import Categories from '../components/Categories'
import SaleBanner from '../components/SaleBanner'
import Producte_with_categories from '../components/Producte_with_categories'
import Sco_comp from '../components/Sco_comp'
import Footer from '../components/Footer'




const Homepage = () => {

  return ( 
    <div className='  '>
      <Categories />
  <SaleBanner  />
   <Producte_with_categories />
   <Sco_comp />
<Footer />
    </div>
  )
}

export default Homepage