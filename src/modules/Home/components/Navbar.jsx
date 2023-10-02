import React from 'react'
import "../style/navbar.css";
import logo from "../../../assets/images/logo .png";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Link } from 'react-router-dom';
import JwtUtils from '../../../routing/JwtUtils'; 

  const handleLogout = () => {
    JwtUtils.logOut();
};

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="nc-logo-container">
        <img src={logo} alt="" className='nc-lc-logo' />
      </div>
      <div className="nc-buttons-container">
      <Link to="/Chatbot">
          <Button variant="contained" className='nc-bc-button'  startIcon={<ChatOutlinedIcon />}>
          Chatbot
        </Button>
        </Link>
        {JwtUtils.isActif() ?  <Button onClick={handleLogout} variant="contained" className='nc-bc-button'  startIcon={<LogoutIcon />}> Logout</Button> : null}
                      </div>
    </div>
  )
}

export default Navbar