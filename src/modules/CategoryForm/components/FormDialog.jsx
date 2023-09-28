import React, { useState, forwardRef } from 'react';
import StyledFormModal from './Form';
import '../style/category.css';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Fade, Modal, styled } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoryRequest } from '../StateTable/CategoryAction';

const Backdrop = forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
        <Fade in={open}>
            <div ref={ref} {...other} />
        </Fade>
    );
});

const StyledBackdrop = styled(Backdrop)`
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
    width: "150px"
}

const normalBtnStyle = {
    color: "white",
    borderColor: "white",
}

const FormDialog = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUploadCancel = () => {
        setSelectedFile(null);
    }

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="form-dialogue">
            <div className="fd-buttons">
                <Button onClick={() => setOpen(prev => !prev)} sx={newBtnStyle} variant="contained" size="large" startIcon={<AddIcon />}>
                    New
                </Button>
                <Button className='fd-btn' onClick={() => dispatch(getCategoryRequest())} sx={normalBtnStyle} variant="outlined" size="large" startIcon={<RefreshIcon />}>
                    Refresh
                </Button>
                <Button className='fd-btn' sx={normalBtnStyle} variant="outlined" size="large" startIcon={<FileDownloadIcon />}>
                    Export
                </Button>
            </div>
            <div className="fd-buttons">
                <Button sx={newBtnStyle} variant="contained" size="large" startIcon={<LogoutIcon />}>
                    Logout
                </Button>
                <Button onClick={() => { history.push("/chatbot") }} className='fd-btn' sx={normalBtnStyle} variant="outlined" size="large" startIcon={<ChatOutlinedIcon />}>
                    ChatBot
                </Button>
            </div>
            <StyledModal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: StyledBackdrop }}
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