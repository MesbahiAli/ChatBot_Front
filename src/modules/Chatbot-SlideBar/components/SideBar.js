import React, { useEffect } from 'react';
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

// 20/09/23

import MenuIcon from '@mui/icons-material/Menu'; 

//

const UploadComponent = () => {

  // 19/09/23

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
    display: 'flex',
    alignItems: 'center',
  };

  const listItemStyle = {
    padding: 0,
    margin: 0,
    marginRight: '-80%',
    
  };

  const docDeleteStyle = {
    color: '#888'
  };

  // ---------------------------

  // 20/09/23

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {  // 768px is the breakpoint you mentioned before
        setIsSidebarOpen(true);
      }
    };

    // Attach resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //

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
    
    <>
    <IconButton style={{ color: '#000', backgroundColor: '#343e8f', margin: 0, padding: '5px', borderRadius: 0 }} onClick={toggleSidebar} className="hamburger-icon" sx={{ display: { xs: 'flex', md: 'none', xl: 'none' } }}>
        <MenuIcon style={{ color: '#aaa', margin: 0, padding: 0 }} />
      </IconButton>
    <div className={isSidebarOpen ? "SidebarDev open" : "SidebarDev closed"} sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                  <ListItemText id='listItemSecondaryAction' style={listItemStyle}>
                    <Checkbox style={checkStyle} id='checkIcon' />
                    <IconButton style={checkStyle} edge="end" onClick={() => handleDelete(file.name)} id='deleteIcon'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemText>
                  <ListItemText primary={file.name} id='listItemPrimaryText'/>
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
    </>
  );
};

export default UploadComponent;
