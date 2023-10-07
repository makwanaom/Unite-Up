"use client"

import React from 'react'
import Templete from '@/componenets/userlogin/Templete'
const SignUp = (setisLoggedIn) => {
  return (
   
    <>
    <Templete

    title="Welcome to Unite Up"
    desc1="You are at the Sign Up page of UniteUp"
    desc2="Enter Your Sign Up Details"
    formtype="signup"
    setisLoggedIn={setisLoggedIn}


    />
    </>
  )
}

export default SignUp