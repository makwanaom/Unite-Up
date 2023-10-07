import React from 'react'
import "./notifications.css"
const Notifications = () => {
  return (
    <div> 
      <div className='mt-4 bg-white w-96 ml-96 rounded-xl'>
                <div className=' p-6'>
                          

                            
                       <button className='border-gray-800 border-2 text-black rounded-full px-4 py-3 shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 transition-all active:border-purple-400' >All</button>
                       
                       <button className=' border-gray-800 border-2 text-black rounded-full px-4 py-3 shadow-2xl bg-gradient-to-r from-slate-300 via-slate-200 to-slate-200 transition-all active:border-purple-400 ml-40'>Mentions</button>
                </div>
               </div>

                 <div className=''> 
               <div className=' p-6 mt-4 bg-white w-96  h-16 ml-96 rounded-xl animate-pulse '>
                       Jane liked your post !
                </div>
                <div className=' p-6 mt-4 bg-white w-96 h-16  ml-96 rounded-xl animate-pulse'>
                       Jane liked your post !
                </div>
                <div className=' p-6 mt-4 bg-white w-96  h16 ml-96 rounded-xl animate-pulse'>
                       Pinkman commented on your post !
                       <br/>

                        <a  className=' text-blue-500' href='/'>Here are the result</a>
                       
                </div>
                </div>  
               
    </div>
  )
}

export default Notifications