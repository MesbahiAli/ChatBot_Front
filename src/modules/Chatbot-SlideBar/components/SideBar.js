import React, { useState } from 'react';
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import { Delete, Update, Publish } from "@mui/icons-material";

const Sidebar = ({ mode, setMode }) => {
  const [file, setFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setSelectedFiles([...selectedFiles, uploadedFile.name]);
  };

  const handleDelete = () => {
    if (file) {
      const updatedFiles = selectedFiles.filter(fileName => fileName !== file.name);
      setSelectedFiles(updatedFiles);
      setFile(null);
    }
  };

  const handleSelectFiles = () => {
    console.log('Selected Files:', selectedFiles);
  };

  return (
    <Box 
      flex={1} p={2} 
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Stack direction="row" spacing={1} mt={2}>
        <input
          accept=".pdf,.txt"
          style={{ display: 'none' }}
          id="upload-button-file"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="upload-button-file">
          <Button variant="contained" color="primary" component="span" startIcon={<Publish />}>
            Upload
          </Button>
        </label>

        <IconButton onClick={handleDelete} color="error">
          <Delete />
        </IconButton>

        <Button variant="outlined" color="primary" startIcon={<Update />} onClick={handleSelectFiles}>
          Select
        </Button>
      </Stack>

      {file && <Typography mt={2}>Selected file: {file.name}</Typography>}
      {selectedFiles.length > 0 && 
        <Box mt={3}>
          <Typography variant="h6">Selected Files:</Typography>
          <ul>
            {selectedFiles.map(fileName => <li key={fileName}>{fileName}</li>)}
          </ul>
        </Box>
      }
    </Box>
  );
};

export default Sidebar;