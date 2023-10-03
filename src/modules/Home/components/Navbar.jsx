import React from 'react'
import "../style/navbar.css";
import logo from "../../../assets/images/logo .png";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSidebarOpen } from '../state/ReducerHome';


const Navbar = () => {
  const location = useLocation();
  const isSidebarOpen = useSelector(selectSidebarOpen);


  return (
    <div className="navbar-container">
      <div className={location.pathname === "/Chatbot" ? (isSidebarOpen ? "nc-logo-container open" : "nc-logo-container ml-80") : "nc-logo-container"}>
        <img src={logo} alt="" className='nc-lc-logo' />
      </div>
      <div className="nc-buttons-container">
        <Button variant="contained" className='nc-bc-button' startIcon={<ChatOutlinedIcon />}>
          Chatbot
        </Button>
        <Button variant="contained" className='nc-bc-button' startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Navbar