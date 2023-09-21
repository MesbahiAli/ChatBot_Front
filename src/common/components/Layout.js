import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { frFR } from "@mui/material/locale";
import config from "../Config";

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
        <main >
          <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        </main>
      </div>
    );
  }
}
export default Layout;  