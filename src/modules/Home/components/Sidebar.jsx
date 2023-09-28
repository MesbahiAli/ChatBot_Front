import React from 'react'
import "../style/sidebar.css";
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, useMediaQuery } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';
import ChatListItem from './ChatListItem';
import { useEffect } from 'react';
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
                        [0,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3].map((item,index) => {
                            return (
                                <ChatListItem index={index} item={item} key={index} />
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
                            TB
                        </ListItem>
                        <ListItemText primary="this is a chat title" />
                    </ListItemButton>
                </List>
            </div>
        </div>
    )
}

export default Sidebar