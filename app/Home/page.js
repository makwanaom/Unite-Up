"use client"
import React, { useState } from 'react'
import Navbar from '@/componenets/navbar/Navbar'
import Feed from '@/componenets/feed/Feed'
import Profile from '@/componenets/profile/Profile'

const HomePage = () => {

  // const [isLoggedin, setisLoggedIn] = useState(false)
  return (
    <div className='flex object-fill '>

    <Profile />
    <Feed/>
    </div>
  )
}

export default HomePage;