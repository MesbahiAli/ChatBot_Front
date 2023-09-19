import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFiles, sendFilesToServer } from '../state/UploadActions';
import { fetchDataRequest } from '../../files/State/ActionsFile';
import { sendFileNamesRequest } from '../SlectedFile/State/actionSlect';

const UploadComponent = () => {
  const dispatch = useDispatch();
  const filesUpload = useSelector(state => state.upload.files);
  const files = useSelector(state => state.Files.data);

  // State to keep track of selected files from the server
  const [selectedFilesFromServer, setSelectedFilesFromServer] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    dispatch(uploadFiles(selectedFiles));
  };

  const handleUploadButtonClick = () => {
    if (filesUpload.length > 0) {
      dispatch(sendFilesToServer());
      dispatch(fetchDataRequest());
    }
  };

  // Toggle selection for server files
  const handleServerFileSelect = (file) => {
    setSelectedFilesFromServer(prev => {
      if (prev.includes(file)) {
        return prev.filter(f => f !== file);
      } else {
        return [...prev, file];
      }
    });
  };

  const handleSendSelectedFilesFromServer = () => {
    dispatch(sendFileNamesRequest(selectedFilesFromServer));
  };


  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  return (
    <div>
      <input
        style={{ display: 'none' }}
        id="file-input"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        <Button 
          component="span" 
          startIcon={<CloudUploadIcon />} 
          variant="contained"
        >
          Select Files
        </Button>
      </label>
      <List>
        {filesUpload.map((file, index) => (
          <ListItem key={index}>
            <ListItemText primary={file.name} />
          </ListItem>
        ))}
      </List>
      <Button 
        onClick={handleUploadButtonClick} 
        startIcon={<CloudUploadIcon />} 
        variant="contained" 
        disabled={filesUpload.length === 0}
      >
        Upload
      </Button>

      <Button 
        onClick={handleSendSelectedFilesFromServer} 
        variant="contained" 
        disabled={selectedFilesFromServer.length === 0}
      >
        Send Selected Server Files
      </Button>
      
      {files?.map(el => (
        <div key={el} style={{ display: 'flex' }}>
          <Checkbox 
            edge="start"
            checked={selectedFilesFromServer.includes(el)}
            onChange={() => handleServerFileSelect(el)}
          />
          {el}
        </div>
      ))}
    </div>
  );
};

export default UploadComponent;
