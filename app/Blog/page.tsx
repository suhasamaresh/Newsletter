import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'

const Blogpage = () => {
  return (
    <div>
        <h1 className='bg-orange-400 text-black pt-1 pb-1 pl-3 pr-3 text-center'>Style BLog</h1>
        <div className='flex gap-[50px]'>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default Blogpage