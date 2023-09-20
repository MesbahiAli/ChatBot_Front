import React, { Component } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { frFR } from "@mui/material/locale";
import { Stack } from '@mui/material';
import config from "../Config";
import Sidebar from '../../modules/Chatbot-SlideBar/components/SideBar';
import Chat_Right from '../../modules/Chatbot-RightBar/components/Chat_Right';
import Auth from '../../modules/Authentification/ui/Auth';
import Feed from '../../modules/Chatbot-Feed/components/Feed';

class Layout extends Component {
  
  render() {
    const theme = createTheme(
      {
        palette: {
          text: {
            primary: "#nnn",
          },
          primary: {
            main: config.primaryColor,
          },
          secondary: {
            main: "#ffffff",
          },
        },
      },
      frFR
    );

    return (
      <div
        style={
          this.props.backgroundColor
            ? {
                position: "relative",
                minHeight: "100vh",
                backgroundColor: this.props.backgroundColor,
              }
            : {
                position: "relative",
                minHeight: "100vh",
              }
        }
      >
<Stack direction="row" justifyContent="space-between" alignItems="stretch" height="100vh">
            <Sidebar />
          <Feed/> 
          <Chat_Right /> 
          <Auth/>
        </Stack>
      </div>
    );
  }
}

export default Layout;
