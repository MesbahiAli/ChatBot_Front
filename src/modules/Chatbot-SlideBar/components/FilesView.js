import React from 'react';
import { Box, Typography } from "@mui/material";

const FilesView = ({ selectedFiles }) => {
  return (
    <Box p={2}>
      <Typography variant="h5">Selected Files:</Typography>
      {selectedFiles.length === 0 
        ? <Typography>No files selected.</Typography>
        : (
          <ul>
            {selectedFiles.map(fileName => <li key={fileName}>{fileName}</li>)}
          </ul>
        )}
    </Box>
  );
};

export default FilesView;
