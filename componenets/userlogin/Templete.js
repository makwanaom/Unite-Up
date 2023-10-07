"use client"
import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {FcGoogle} from "react-icons/fc"
import Image from 'next/image'
const Templete = ({title,desc1,desc2,image,formtype,setisLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-[1160px]'>
        <h1 className=' text-richblack-1 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className=' text-richblack-100 '>{desc1}</span>
          <br/><br/>
            <span className='italic mt-5'>{desc2}</span>
        </p>

        {formtype === "signup" ? (<SignUpForm setisLoggedIn={setisLoggedIn}/>):(<LoginForm setisLoggedIn={setisLoggedIn}/>)}

        <div className='flex items-center my-2 gap-x-2'>
          <div className=' w-full h-[1px] bg-black' ></div>
          <p>OR</p>
          <div  className=' w-full h-[1px] bg-black'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-800 border border-black px-[12px] py-[8px] gap-x-2 mt-6'>
         
            <FcGoogle/>
            <p>
            Sign Up with Google 
          </p>
          </button>
      </div>
      <div className='w-11/12 relative max-w-[250]'>
     
      </div>
    </div>

  )
}

export default Templete