import React from 'react';
import { Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
const Feed = () => {
  const summarize =useSelector((state) => state.Summarize.data);
  
  return (
   <Box bgcolor="#212229" color="#fff" flex={4} p={{ xs: 0, md: 2 }}>   
   {summarize}
    </Box>
  );
};

export default Feed;