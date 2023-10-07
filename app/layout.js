"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/componenets/navbar/Navbar'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {

  
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <html lang="en">
     
      <body className={'inter.className bg-gray-300'}>
      <Navbar isLoggedIn={!isLoggedIn}  setisLoggedIn={!setisLoggedIn}/>
      
        {children}</body>
    </html>
  )
}
