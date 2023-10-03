import React from 'react'
import "../style/home.css"
import Navbar from "./Navbar";
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="home-container">
        <Sidebar  />
        <Navbar />
    </div>
  )
}

export default Home