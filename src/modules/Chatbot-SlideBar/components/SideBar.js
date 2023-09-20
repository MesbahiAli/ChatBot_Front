import React,{useState,useEffect} from 'react';
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

const UploadComponent = () => {
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
 

  const filesUpload = useSelector(state => state.upload.files);
  const files = useSelector(state => state.Files.data);


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
          <span className="text">Select Files</span>
        </Button>
      </label>

      <div className="file-list-container">
        <List>
          {filesUpload.map((file, index) => (
            <ListItem id='listItem' style={docStyle} key={index}>
              <ListItemText primary={file.name} id='listItemPrimaryText'/>
              <ListItemSecondaryAction id='listItemSecondaryAction'>
                {/* <IconButton style={checkStyle} edge="end" onClick={() => handleDelete(file.name)} id='deleteIcon'>
                  <DeleteIcon />
                </IconButton> */}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>

<label id='sendServerLabel'>
        <Button onClick={handleUploadButtonClick}  id='sendBtn' style={sendServerButton} endIcon={<CloudUploadIcon  />} >
          <span className="text">Upload</span>
        </Button>
      </label>


      <label id='sendServerLabel'>
        <Button  onClick={handleSendSelectedFilesFromServer} id='sendBtn' style={sendServerButton} endIcon={<SendIcon />} >
          <span className="text">Send Selected to Server File</span>
        </Button>
      </label>
     
      <List> {files?.map(el => (
        <div key={el} style={{ display: 'flex' }}>
          <Checkbox 
            style={checkStyle}
            edge="start"
            checked={selectedFilesFromServer.includes(el)}
            onChange={() => handleServerFileSelect(el)}
          />
          {el}
        </div>
      ))}
      </List>
    </div>
  );
};

export default UploadComponent;
