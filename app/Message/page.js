"use client"
import React from 'react'
import './Message.css'
import Chat from '@/componenets/chat/Chat'
import Chatsidebar from '@/componenets/chatsidebar/Chatsidebar'

const Message = () => {
  return (
    <div className=' h-screen flex items-center justify-center '>
     
     <div className='border h-4/5 flex   overflow-hidden w-[90%] rounded-[10px] border-solid border-[white]'>
        <Chatsidebar/> 

        <Chat/>
    </div> 
      
    </div>
  )
}

export default Message