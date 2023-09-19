import React from 'react';
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFiles, deleteFile, sendFilesToServer } from '../state/UploadActions';

const UploadComponent = () => {
  const dispatch = useDispatch();
  const files = useSelector(state => state.upload.files);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    dispatch(uploadFiles(selectedFiles));
  };

  const handleDelete = (fileName) => {
    dispatch(deleteFile(fileName));
  };

  const handleUploadButtonClick = () => {
    dispatch(sendFilesToServer());
  };

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
        <Button component="span" startIcon={<CloudUploadIcon />} variant="contained">
          Upload
        </Button>
      </label>

      <List>
        {files.map((file, index) => (
          <ListItem key={index}>
            <ListItemText primary={file.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleDelete(file.name)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      <Button startIcon={<SendIcon />} variant="contained" onClick={handleUploadButtonClick}>
        Send to Server
      </Button>
    </div>
  );
};

export default UploadComponent;
