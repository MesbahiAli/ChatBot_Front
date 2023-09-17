import React from 'react';
import { Box } from "@mui/material";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box 
      flex={1} p={2} 
      sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "blue" }}
    >
      <Box position="fixed">
        AZZERTY
      </Box>
    </Box>
  );
};

export default Sidebar;
