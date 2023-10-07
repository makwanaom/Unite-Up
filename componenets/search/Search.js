import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className=' text-black'>
      <div className=' w-full p-5'>
        <input type='text' placeholder='Search Here' className='bg-transparent text-black outline-none w-full placeholder:border-l-amber-200 border-[none]'/>
      </div>
      <div className='flex items-center gap-2.5  cursor-pointer p-2.5 hover:bg-[#dfdfe2]'>
        <Image src='/download.jpg' width={50} height={50}/>
        <div className='text-black font-semibold'>
          <span>Jane</span>
        </div>
      </div>


    </div>
  )
}

export default Search