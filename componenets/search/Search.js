import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className=' text-black'>
      <div className=' w-full p-5'>
        <input type='text' placeholder='Search Here' className='bg-transparent text-black outline-none w-full placeholder:border-l-amber-200 border-[none]'/>
      </div>


    </div>
  )
}

export default Search