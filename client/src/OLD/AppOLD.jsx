// import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoPost from './component/InfoPosts';
// import { Home } from './component/Home'
import Navbar from './component/Navbar';
// import Users from './component/Users';
// import info from "./componets/infoList"



// think of this as like a pintrest boardgame form - so you have a user - you input the games you like/have/want - then there is infomation about the game
export default function App() {
  return (
      <div>
      <h2>Top Of The Table!</h2>

      <BrowserRouter>
        <div id="navbar">
            <Navbar/>
        </div>

        <Routes>
          {/* <Route path="/" element={<InfoPost />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/infoPosts" element={<InfoPost />} />
          
          {/* <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/info" element={<infoList />} /> */}
        </Routes>
      </BrowserRouter>
        
      </div>
  )
}


  