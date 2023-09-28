import { Box } from "@mui/system";
import React from "react";
import Chat_Right from "../components/Chat_Right";
import { Stack } from '@mui/material';
import Feed from "../../Chatbot-Feed/components/Feed";
import ChatRight from './../components/Chat_Right';
import Sidebar from "../../Chatbot-SlideBar/components/SideBar"
import Auth from "../../Authentification/ui/Auth";
import GBTbar from "../../Home/components/Sidebar";
import Filebar from "../../Chatbot-SlideBar/components/Filebar";
export default function Chat() {

  return (
    <div style={{display:"flex",height:"100vh",width:"100vw",justifyContent:"space-between"}}>
      {/* <Feed/>  */}
      {/* <Auth/> */}
      <GBTbar />
      <ChatRight />
      {/* <Sidebar /> */}
      <Filebar/>
    </div>
  );
}
