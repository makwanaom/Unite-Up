import React from 'react'

const ChatInput = () => {
  return (
    <div className='h-[60px] flex bg-slate-50 p-[10px]'>
      <input className=' outline-none h-[45px] max-w- bg-slate-50 p-[10px]' type='text' placeholder='Type Something..'/>
      <div className=' ml-auto'>
        <img src='' alt='' />
        <input type='text' style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src='' alt=''/>
        </label>
        <button className=' p-2 border rounded-lg bg-slate-100'>Send </button>
      </div>
    </div>
  )
}

export default ChatInput