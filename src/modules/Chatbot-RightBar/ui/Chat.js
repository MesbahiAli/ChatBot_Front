import { Box } from "@mui/system";
import React from "react";
import Chat_Right from "../components/Chat_Right";
import { Stack } from '@mui/material';
import Feed from "../../Chatbot-Feed/components/Feed";
import ChatRight from './../components/Chat_Right';
import Sidebar from "../../Chatbot-SlideBar/components/SideBar"
import Auth from "../../Authentification/ui/Auth";

export default function Chat() {
  
  return (
    <>
    <Stack direction="row" justifyContent="space-between" alignItems="stretch" height="100vh">
          <Sidebar/> 
          <Feed/> 
          {/* <Auth/> */}
          <ChatRight />
    </Stack>
  </>      
  );
}
