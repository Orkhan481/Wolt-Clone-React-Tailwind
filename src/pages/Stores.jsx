import Title from 'components/discovery/Title'
import AllStores from 'components/stores/AllStores'
import Categories from 'components/stores/Categories'
import React from 'react'

const Stores = () => {
  return (
    <div className='p-[30px]'>
      <h1 className='text-[1.575rem] md:text-[1.875rem] lg:text-[2.875rem]  font-bold break-normal'><Title>Mağazalar - Bakı</Title></h1>
      <Categories />
      <AllStores />
    </div>
  )
}

export default Stores
