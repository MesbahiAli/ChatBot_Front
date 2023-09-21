import React, { useState,useEffect } from 'react';
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../../files/State/ActionsFile';
import { uploadFiles, sendFilesToServer } from '../state/UploadActions';
import { sendFileNamesRequest } from '../SlectedFile/State/actionSlect';
import '../style/Sidebar.css';
import Checkbox from '@mui/material/Checkbox';
import { requestToggle } from '../../Chatbot-RightBar/components/Togle/State/TogleAction';
import { deleteFileApi } from '../../../common/services/DeleteService';
import { requestSummarize } from '../../Chatbot-RightBar/components/Summarize/State/SummarizeActions';
import { fetchPdfRequest } from './FileView.js/State/ViewActions';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
// 20/09/23


// Mouad Doadi - 21/09/23 >

import SummarizeIcon from '@mui/icons-material/Summarize';
import VisibilityIcon from '@mui/icons-material/Visibility';

// toggle >

import ToggleButton from '@mui/lab/ToggleButton';
import ToggleButtonGroup from '@mui/lab/ToggleButtonGroup';

// < toggle

// < 21/09/23

import MenuIcon from '@mui/icons-material/Menu'; 
const UploadComponent = () => {

  const [selectedFilesFromServer, setSelectedFilesFromServer] = useState([]);
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    dispatch(uploadFiles(selectedFiles));
  };

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

  // Mouad Doadi - 21/09/23 >

  const [selected, setSelected] = useState(false);

  // < 21/09/23

  const dispatch = useDispatch();
  const filesUpload = useSelector(state => state.upload.files);
  console.log(filesUpload)
  const files = useSelector(state => state.Files.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  const handleUploadButtonClick = () => {
    if (filesUpload.length > 0) {
      dispatch(sendFilesToServer());
      dispatch(fetchDataRequest());
    }
  };

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

  const handleDelete = (filename) => {
    deleteFileApi(filename)
      .then(response => {
        dispatch(fetchDataRequest());  
      })
      .catch(error => {
        console.error("Error deleting file:", error);
      });
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
            <Button className="sidebar-button" component="span" startIcon={<CloudDoneIcon />} style={buttonStyle} >
              <span className="text">Select Files</span>
            </Button>
          </label>

          <div className="file-list-container">
            <List>

              {filesUpload.map((file, index) => (
                <ListItem id='listItem' style={docStyle} key={index}>
                  <ListItemText primary={file.name} id='listItemSecondaryAction' style={listItemStyle}>
                  </ListItemText>
                  {/* <ListItemText primary={file.name} id='listItemPrimaryText'/> */}
                </ListItem>
              ))}
            </List>
          </div>

          <label id='sendServerLabel'>
            <Button onClick={handleUploadButtonClick} id='sendBtn' style={sendServerButton} endIcon={<CloudUploadIcon />}>
              <span className="text">Upload</span>
            </Button>
          </label>

          <br />
          <hr style={ { height: '1px', border: 'none' } }/>
    
          {/*<Button onClick={()=>dispatch(requestToggle())}>Change language</Button> 
          <ToggleButtonGroup
            value={selected}
            exclusive
            onChange={() => setSelected(!selected)}
            onClick={()=>dispatch(requestToggle())}
            aria-label="toggle button"
          >
            <ToggleButton value={true} aria-label="summarize" style={{ color: 'white'}}>
              {selected ? <img src="https://www.svgrepo.com/show/248851/united-states.svg" alt="EN" width="30" /> : <img src="https://www.svgrepo.com/show/248840/netherlands.svg" alt="Dutch" width="30" />}
            </ToggleButton>
          </ToggleButtonGroup>*/}

          <List className="second-list file-list-container"> {files?.map(el => (
            <div key={el} style={{ display: 'flex' }} className='li-container'>
                    {el}

              <div className='icon-container'>
              <Checkbox 
                style={checkStyle}
                edge="start"
                checked={selectedFilesFromServer.includes(el)}
                onChange={() => handleServerFileSelect(el)}
              />
              <IconButton style={checkStyle} edge="end" onClick={() => handleDelete(el)} id='deleteIcon'>
              <DeleteIcon />
              </IconButton>
              <Button onClick={()=>dispatch(requestSummarize(el))} id='summarizeIcon' title="Summarize the document"><SummarizeIcon/></Button>
            <Button onClick={()=>dispatch(fetchPdfRequest(el))} id='viewIcon' title="View the document"><VisibilityIcon /></Button>
              </div>

            </div>
            ))}
          </List>

          <label id='sendServerLabel'>
            <Button  onClick={handleSendSelectedFilesFromServer} id='sendBtn' style={sendServerButton} endIcon={<SendIcon />} >
              <span className="text">Send selected files</span>
            </Button>
          </label>

          </div>
    </>
  );
};

export default UploadComponent;