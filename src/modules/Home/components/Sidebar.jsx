import React from 'react'
import "../style/sidebar.css";
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { Box, Button, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Tab, useMediaQuery } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from 'react';
import ChatListItem from './ChatListItem';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import JwtUtils from '../../../routing/JwtUtils';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import FilebarTab from '../../Chatbot-SlideBar/components/FilebarTab';
import { sidebarTrigger } from '../state/ActionsHome';
import { selectSidebarOpen } from '../state/ReducerHome';
import { reset } from './StateMessage/MessageAction';
const Sidebar = () => {
    const matches = useMediaQuery("(max-width:820px)");
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(selectSidebarOpen);
    const sidebarTriggerer = () => {
        dispatch(sidebarTrigger({bool:!isSidebarOpen}));
        const main = document.querySelector(".sc-main");
        const footer = document.querySelector(".sc-footer");
        // const navbar = document.querySelector(".navbar-container");
        // navbar.classList.toggle("no-sidebar")
        setTimeout(() => {
            main.classList.toggle("none")
            footer.classList.toggle("none")
        }, 100)

    }
    useEffect(() => {
        if (matches) {
            sidebarTriggerer()
        }
    }, [matches])


    const conversations = useSelector((state) => state.listItem.conversations.conversations);
    const [value, setValue] = useState("1")
    const handleChange = (e, newVal) => {
        setValue(newVal);
    }
    const username = localStorage.username
    return (
        <div className={isSidebarOpen ? "sidebar-container " : "sidebar-container close"}>
            <div className="sc-headers">
                <Button onClick={()=>dispatch(reset())} variant="outlined" className='sc-headers-button' startIcon={<AddRoundedIcon className='sc-headers-icon' />}>New Chat</Button>
                <IconButton className='sc-headers-iconButton' onClick={sidebarTriggerer}>
                    <WindowRoundedIcon />
                </IconButton>
                <IconButton style={{ display: isSidebarOpen ? "none" : "block" }} className='sc-headers-iconButton abs' onClick={sidebarTriggerer}>
                    <WindowRoundedIcon />
                </IconButton>
            </div>
            <div className="sc-main">
                <TabContext value={value}  >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList variant="fullWidth" onChange={handleChange} >
                            <Tab label="upload" value="1" className='sc-main-tab' />
                            <Tab label="history" value="2" className='sc-main-tab'/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" className='sc-main-tab-panel second'>
                        <FilebarTab />
                    </TabPanel>
                    <TabPanel value="2" className='sc-main-tab-panel '>
                        <List
                            className='sc-main-list'
                        >
                            {
                                conversations?.map((item, index) => {
                                    return (
                                        <ChatListItem index={item.id} item={item.title} key={item.id} />
                                    )
                                })
                            }
                        </List>
                    </TabPanel>
                </TabContext>

            </div>
            <div className="sc-footer">
                <List
                    className='sc-footer-list'
                >
                    <ListItemButton className='sc-main-list-item'>
                        <ListItem className='sc-footer-list-item-img'>
                            {username.substring(0, 2)}
                        </ListItem>

                        {JwtUtils.isActif() ? (<ListItemText sx={{color:"white"}} primary={username} />):null}
                    </ListItemButton>
                </List>
            </div>
        </div>
    )
}

export default Sidebar