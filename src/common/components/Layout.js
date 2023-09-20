import React, { Component } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { frFR } from "@mui/material/locale";
import { Stack } from '@mui/material';
import config from "../Config";
import Sidebar from '../../modules/Chatbot-SlideBar/components/SideBar';
import Chat_Right from '../../modules/Chatbot-RightBar/components/Chat_Right';
import Auth from '../../modules/Authentification/ui/Auth';

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
              width: "100vw",
              backgroundColor: this.props.backgroundColor,
            }
            : {
              position: "relative",
              minHeight: "100vh",
              width: "100vw",
            }
        }
      >
        <Stack direction="row" justifyContent="space-between" alignItems="stretch" height="100vh">
          <Auth />
          {/* <Sidebar /> */}
          {/* <Feed/>  */}
          {/* <Chat_Right />  */}
        </Stack>
      </div>
    );
  }
}

export default Layout;
