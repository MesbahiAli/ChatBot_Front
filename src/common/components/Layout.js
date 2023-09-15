import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { frFR } from "@mui/material/locale";
 import Navbar from "./Navbar";
import config from "../Config";
import Sidebar from "../../modules/Chatbot-SlideBar/components/SideBar";
import Feed from "../../modules/Chatbot-Feed/components/Feed";
import {Container, Stack} from '@mui/material';
import Chat from "../../modules/Chatbot-RightBar/ui/Chat";


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
      <Stack direction="row" spacing={2} justifyContent="space-between" height="100vh">
        <Sidebar/>
        <Feed/>
        <Chat/>
        </Stack>
        {/* <main style={{ paddingBottom: "1.5rem" }}>
          <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        </main> */}
      </div>
    );
  }
}
export default Layout;  
