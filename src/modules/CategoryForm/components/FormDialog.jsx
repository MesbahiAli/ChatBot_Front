import React, { forwardRef, useState, useEffect } from 'react';
import '../style/category.css';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Button, Fade, Modal, Box, styled } from '@mui/material';
import StyledFormModal from './Form';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoryRequest } from '../StateTable/CategoryAction';

const StyledBackdrop = styled((props) => (
  <Fade {...props}>
    <div {...props} />
  </Fade>
))`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const newBtnStyle = {
  backgroundColor: "#343e8b",
  color: "white",
  width: "150px",
};

const FormDialog = () => {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [nightMode, setNightMode] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (nightMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [nightMode]);

  const handleClose = () => setOpen(false);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadCancel = () => {
    setSelectedFile(null);
  };

  return (
    <div className="form-dialogue">
      <div className="fd-buttons">
        <Button onClick={() => setOpen(!open)} style={newBtnStyle} variant="contained" size="large" startIcon={<AddIcon />}>
          New
        </Button>
        <Button onClick={() => dispatch(getCategoryRequest())} style={newBtnStyle} variant="contained" size="large" startIcon={<RefreshIcon />}>
          Refresh
        </Button>
        <Button style={newBtnStyle} variant="contained" size="large" startIcon={<FileDownloadIcon />}>
          Export
        </Button>
      </div>
      <div className="fd-buttons">
        <Button style={newBtnStyle} variant="contained" size="large" startIcon={<LogoutIcon />}>
          Logout
        </Button>
        <Button onClick={() => history.push("/chatbot")} style={newBtnStyle} variant="contained" size="large" startIcon={<ChatOutlinedIcon />}>
          ChatBot
        </Button>
        <Button onClick={() => setNightMode(prev => !prev)} style={newBtnStyle} variant="contained" size="large">
        Night Mode
        </Button>
      </div>
      <StyledModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={StyledBackdrop}
      >
        <StyledFormModal
          handleClose={handleClose}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
          handleUploadCancel={handleUploadCancel}
        />
      </StyledModal>
    </div>
  );
}

export default FormDialog;
