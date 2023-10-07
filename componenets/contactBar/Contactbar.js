import React from 'react'
import Image from 'next/image'
const Contactbar = () => {
  return (
    <div>
      
      <div className='flex items-center gap-2.5  cursor-pointer p-2.5 hover:bg-[#dfdfe2]'>
        <Image src='/janeImage.jpg' width={50} height={50}/>
        <div className='text-black font-semibold'>
          <span>Jane</span>
          <p className='text-sm text-slate-500'>We will Discuss it later</p>
        </div>
      </div>

      <div className='flex items-center gap-2.5  cursor-pointer p-2.5 hover:bg-[#dfdfe2]'>
        <Image src='/download.jpg' width={50} height={50}/>
        <div className='text-black font-semibold'>
          <span className=' text-sm' >jessie</span>
          <p className='text-sm text-slate-500'>I'm Looking Forward To It</p>
        </div>
      </div>
      <div className='flex items-center gap-2.5  cursor-pointer p-2.5 hover:bg-[#dfdfe2]'>
        <Image src='/pinkmanImage.jpg' width={50} height={50}/>
        <div className='text-black font-semibold'>
          <span className=' text-sm'>Pinkman</span>
          <p className='text-sm text-slate-500'>Good Morning Sir</p>
        </div>
      </div>
      <div className='flex items-center gap-2.5  cursor-pointer p-2.5 hover:bg-[#dfdfe2]'>
        <Image src='/walterimage.jpg' width={50} height={50}/>
        <div className='text-black font-semibold'>
          <span className=' text-sm'>WALTER WHITE</span>
          <p className='text-sm text-slate-500'>I will Let You know</p>
        </div>
      </div>
      <div className='flex items-center gap-2.5  cursor-pointer p-2.5 hover:bg-[#dfdfe2]'>
        <Image src='/skyler.jpg' width={50} height={50}/>
        <div className='text-black font-semibold'>
          <span className=' text-sm'>Skyler</span>
          <p className='text-sm text-slate-500'>Can we schedule a Meet ?</p>
        </div>
      </div>

    </div>
  )
}

export default Contactbar