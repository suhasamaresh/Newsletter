import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between pr-10 sm:pr-0 md:pr-20'>
      <button className='w-[100px] p-[16px] bg-red-700 text-white cursor-pointer'>
        Previous
      </button>
      <button className='w-[100px] p-[16px] bg-red-700 text-white cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination
