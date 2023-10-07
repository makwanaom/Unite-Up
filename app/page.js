"use client"
import React from "react"
// import HomePage from "./Home/page"
import HomePage from "../app/Home/page"
import Login from "./Login/page"
import SignUp from "./SignUp/page"
import './globals.css'
import { BrowserRouter, Routes , Route } from "react-router-dom"
import { useState } from "react"
import Explore from "./Explore/page"
import Notifications from "./Notifications/page"
import Message from "./Message/page"

// import Events from "./Events/Page"
// import Events from "./Events/page"


 const Home = () => {

  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
  <>
    {/* <BrowserRouter> */}
{/*  
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="/Notifiactions" element={<Notifications/>}/>
      <Route path="/Message" element={<Message/>}/>
      <Route path="/Events" element={<Events/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Login" element={<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>}/>
    </Routes>
       */}
    <HomePage/>
    {/* </BrowserRouter> */}
 
      
  </>
  ) 
} 
export default Home;