import { Box } from "@mui/system";
import React from "react";
import Chat_Right from "../components/Chat_Right";

export default function Chat() {
  
  return (
    <Box 
    flex={1} p={2} 
    sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "blue" }}
  >
    <Chat_Right />
  </Box>      
  );
}
