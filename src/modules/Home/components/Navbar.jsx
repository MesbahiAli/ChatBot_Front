import React from 'react'
import "../style/navbar.css";
import logo from "../../../assets/images/logo .png";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';


const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="nc-logo-container">
        <img src={logo} alt="" className='nc-lc-logo' />
      </div>
      <div className="nc-buttons-container">
        <Button variant="contained" className='nc-bc-button'  startIcon={<ChatOutlinedIcon />}>
          Chatbot
        </Button>
        <Button  variant="contained" className='nc-bc-button'  startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Navbar