import React from 'react'
import Hero from '../components/Hero'
import MealList from '../components/MealList'
import SearchFrom from '../components/SearchFrom'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SearchFrom/>
      <MealList/>
    </div>
  )
}

export default HomePage