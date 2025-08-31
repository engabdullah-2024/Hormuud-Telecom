import React from 'react'
import Hero from './hero/page'
import CustomersPage from './customers/page'
import PlansPage from './plans/page'

const Home = () => {
  return (
   <div>
  <Hero/>
  <CustomersPage/>
  <PlansPage/>
   </div>
  )
}

export default Home