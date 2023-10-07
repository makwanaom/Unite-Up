import React from 'react'
import Messegebar from '../messagebar/Messegebar'
import ChatInput from '../chatInput/ChatInput'
const Chat = () => {
  return (
    <div className=' flex-auto'>
      <div className='flex items-center bg-[#48457a] h-[50px] justify-between text-[#ddddf7] p-2.5'>
        <div>
          <span className='text-[#ddddf7]'>
            Jane
          </span>
          <div>
           
          </div>
        </div>
      </div>
      <Messegebar />
      <ChatInput/>
    </div>
  )
}

export default Chat