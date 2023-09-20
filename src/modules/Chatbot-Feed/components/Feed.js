
import React from 'react';
import { Box } from "@mui/material";

const Feed = () => {

  return (
    <Box bgcolor="#212229" color="#fff" flex={4} p={{ xs: 0, md: 2 }}>
        <iframe 
          src="https://perso.univ-rennes1.fr/virginie.sans/l2pw/UElibre_Internet.pdf" 
          title="Document Preview"
          style={{ width: '100%', height: '500px', border: 'none' }} 
        ></iframe>
    </Box>
  );
};

export default Feed;
