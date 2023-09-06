// import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoPost from './component/InfoPosts';
import Navbar from './component/Navbar';
// import users from "./componets/users"
// import info from "./componets/infoList"



export default function App() {
  return (
      <div>
      <h2>Top Of The Table!</h2>

      <BrowserRouter>
        <div id="navbar">
            <Navbar/>
        </div>

        <Routes>
          <Route path="/" element={<InfoPost />} />
          <Route path="/infoPosts" element={<InfoPost />} />
          
          {/* <Route path="/users" element={<Users />} />
          <Route path="/info" element={<infoList />} /> */}
        </Routes>
      </BrowserRouter>
        
      </div>
  )
}