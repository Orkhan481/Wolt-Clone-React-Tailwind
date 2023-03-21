import Title from 'components/discovery/Title'
import AllRestorans from 'components/restaurants/AllRestorans'
import Categories from 'components/restaurants/Categories'
import React from 'react'

const Restaurants = () => {
  return (
    <div className='p-[30px]'>
      <h1 className='text-[1.575rem] md:text-[1.875rem] lg:text-[2.875rem]  font-bold break-normal'><Title>Restoranlar - Bakı</Title></h1>
      <Categories />
      <AllRestorans />
    </div>
  )
}

export default Restaurants
