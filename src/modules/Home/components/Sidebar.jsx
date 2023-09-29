import React from 'react'
import "../style/sidebar.css";
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, useMediaQuery } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';
import ChatListItem from './ChatListItem';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import JwtUtils from '../../../routing/JwtUtils';
const Sidebar = () => {
    const [bool, setBool] = useState(false)
    const matches = useMediaQuery("(max-width:820px)");
    
    const sidebarTrigger = () => {
        setBool(prev=>!prev)
        const main = document.querySelector(".sc-main");
        const footer = document.querySelector(".sc-footer");
        // const navbar = document.querySelector(".navbar-container");
        // navbar.classList.toggle("no-sidebar")
        setTimeout(() => {
            main.classList.toggle("none")
            footer.classList.toggle("none")
        }, 100)

    }
    useEffect(()=>{
        if (matches) {
            sidebarTrigger()
        }
    },[matches])


    const conversations = useSelector((state) => state.listItem.conversations.conversations)
    
const username=localStorage.username
    return (
        <div className={bool ? "sidebar-container close" : "sidebar-container "}>
            <div className="sc-headers">
                <Button variant="outlined" className='sc-headers-button' startIcon={<AddRoundedIcon className='sc-headers-icon' />}>New Chat</Button>
                <IconButton className='sc-headers-iconButton' onClick={sidebarTrigger}>
                    <WindowRoundedIcon />
                </IconButton>
                <IconButton style={{display:bool?"block":"none"}} className='sc-headers-iconButton abs' onClick={sidebarTrigger}>
                    <WindowRoundedIcon />
                </IconButton>
            </div>
            <div className="sc-main">
                <List
                    className='sc-main-list'
                >
                    {
                        conversations?.map((item,index) => {
                            return (
                                <ChatListItem index={item.id} item={item.title} key={item.id} />
                            )
                        })
                    }
                </List>
            </div>
            <div className="sc-footer">
                <List
                    className='sc-footer-list'
                >
                    <ListItemButton className='sc-main-list-item'>
                        <ListItem className='sc-footer-list-item-img'>
                        {username.substring(0,2)}
                        </ListItem>
                        {JwtUtils.isActif() ? (<ListItemText primary={username} />):null}
                    </ListItemButton>
                </List>
            </div>
        </div>
    )
}

export default Sidebar