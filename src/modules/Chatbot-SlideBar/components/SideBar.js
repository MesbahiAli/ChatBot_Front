import React from 'react';
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFiles, deleteFile } from '../state/UploadActions';
import { bgcolor, style } from '@mui/system';
import { blue } from '@mui/material/colors';

import '../style/Sidebar.css';
import Checkbox from '@mui/material/Checkbox';

const UploadComponent = () => {

  const buttonStyle = {
    color: '#fff'
  };

  const checkStyle = {
    color: '#fff',
    margin: 0,
    padding: 0
  };

  const sendServerButton = {
    color: '#fff'
  };

  const sendServerLabel = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',  // Take full width of its parent.
    height: '100%', // Take full height of its parent.
  };
  

  const docStyle = {
    color: 'white',
  };

  const docDeleteStyle = {
    color: '#888'
  };

  const dispatch = useDispatch();
  const files = useSelector(state => state.upload.files);
console.log(files)
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    dispatch(uploadFiles(selectedFiles));
  };

  const handleDelete = (fileName) => {
    dispatch(deleteFile(fileName));
  };

  return (
    <div className='SidebarDev'>
      <input
        style={{ display: 'none' }}
        id="file-input"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <label id='uploadLabel' htmlFor="file-input">
        <Button className="sidebar-button" component="span" startIcon={<CloudUploadIcon />} style={buttonStyle} >
          <span className="text">Upload</span>
        </Button>
      </label>

      <div className="file-list-container">
        <List>
          {files.map((file, index) => (
            <ListItem id='listItem' style={docStyle} key={index}>
              <ListItemText primary={file.name} id='listItemPrimaryText'/>
              <ListItemSecondaryAction id='listItemSecondaryAction'>
                <Checkbox style={checkStyle} />
                <IconButton style={checkStyle} edge="end" onClick={() => handleDelete(file.name)} id='deleteIcon'>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>

      <label id='sendServerLabel'>
        <Button id='sendBtn' style={sendServerButton} endIcon={<SendIcon />}>
          <span className="text">Send to Server</span>
        </Button>
      </label>
    </div>
  );
};

export default UploadComponent;
