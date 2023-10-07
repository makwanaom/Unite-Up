"use client"
import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai"
import Link from 'next/link'


const LoginForm = (setisLoggedIn) => {



    const [FormData, setFormData] = useState({
        email:"",password:""
    })
    function changeHandler(event) {
        setFormData( (prevData) => (
            {
            ... prevData,
            [event.target.name]:event.target.value
        }
        ))
    }


    function submitHandler(event) {
        event.preventDefault();
        console.log(setisLoggedIn)
        // setisLoggedIn(true);
      
        
    }
    const [showPassword, setshowPassword] = useState(false)
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className=' text-red-700'>*</sup>
            </p>
            <input 

                required
                type="email"
                value={FormData.email}
                onChange={changeHandler}
                placeholder="Enter Email Id"
                name="email"
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        <label  className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className=' text-red-700'>*</sup>
            </p>
            <input

                required
                type={showPassword ? ("text"):("password")}
                value={FormData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
            <span className='absolute right-3 top-[40px] cursor-pointer' onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />): (<AiOutlineEye fontSize={24} />)}
            </span>
            <Link  href="#"> 
            <p className="text-xs mt-1 text-gray-700 max-w-max ml-auto">Forgot Password</p>
            </Link>
        </label>
        <button className=' bg-gray-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 '>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm