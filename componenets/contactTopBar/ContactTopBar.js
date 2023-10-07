import React from 'react'
import Image from 'next/image'

const ContactTopBar = () => {
  return (
    <div className='flex items-center bg-[#2f2d52] h-[50px] justify-between text-[#ddddf7] p-2.5'>

        <span>Messages</span>
        <div className='flex gap-8 font-semibold text-lg' >

            <span>Joey</span>
            <Image className=' w-[2.525rem] h-[2.525rem] object-cover ' src='/elonmusk.jpg' width={50} height={50}/>
         
        </div>
     
    </div>
  )
}

export default ContactTopBar