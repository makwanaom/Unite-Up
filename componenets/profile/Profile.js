"use client"
import React from 'react';
import Feed from '@/componenets/feed/Feed'
const Profile = () => {
  return (
    <>

      <main className='flex ml-20 h-fit justify-center gap-x-5 px-4 sm:px-12 mt-4'>
        <div className='flex flex-col md:flex-row gap-5 bg-white rounded-[10px] '>

        {/* Sidebar */}
        <div className='space-y-2 min-w-max max-w-lg relative flex flex-col items-center text-center'>
          {/* Circular Profile Picture */}
          <div
            className=' w-20 h-20 mt-4 rounded-full overflow-hidden border-2 border-lime-950'
            style={{ backgroundImage: 'url("/elonmusk.jpg")', backgroundSize: 'cover' }}
          />

            <div className='mt-5 py-4 space-x-0.5 '>
              <h4 className='hover:underline decoration-purple-700 underline-offset-1 cursor-pointer'>Elon Musk</h4>
              <p className='text-black/60 text-sm'>elonmusk@gmail.com</p>
            </div>

            <div className='hidden md:inline text-left text-sm'>
              <div className='font-medium  border-gray-600 py-3 px-4 cursor-pointer opacity-80 hover:opacity-100 space-y-0.5'>
                <div className='flex  border-gray-600 py-3 px-4 cursor-pointer opacity-80 hover:opacity-100 justify-between space-x-4'>
                  <h4>
                    Who reached your profile?
                  </h4>
                  <span className='text-blue-500'>201</span>

                </div>
                <div className='flex  border-gray-600 py-3 px-4 cursor-pointer opacity-80 hover:opacity-100 justify-between space-x-4'>
                  <h4>View count for your post</h4>
                  <span className='text-blue-500'>602</span>
                </div>

                <div className='flex  border-gray-600 py-3 px-4 cursor-pointer opacity-80 hover:opacity-100 justify-between  space-x-4'>
                  <h4>
                    Access exclusive resources and further insights
                  </h4>
                </div>

              </div>

            </div>
          </div>

          {/* feed */}


        </div>
          
            
         
    </main>
        
   


    </>
  );
}

export default Profile;
