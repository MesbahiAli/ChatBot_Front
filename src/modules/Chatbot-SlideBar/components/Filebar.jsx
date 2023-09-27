import React, { useState, useEffect, useRef } from 'react';
import "../style/filebar.css";
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../../files/State/ActionsFile';
import { uploadFiles, sendFilesToServer, clearUploadedFiles, toggleSidebarClick } from '../state/UploadActions';
import { sendFileNamesRequest } from '../SlectedFile/State/actionSlect';
import Checkbox from '@mui/material/Checkbox';
import { requestToggle } from '../../Chatbot-RightBar/components/Togle/State/TogleAction';
import { deleteFileApi } from '../../../common/services/DeleteService';
import { requestSummarize } from '../../Chatbot-RightBar/components/Summarize/State/SummarizeActions';
import { fetchPdfRequest } from './FileView.js/State/ViewActions';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import LogoutIcon from '@mui/icons-material/Logout';

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
import JwtUtils from '../../../routing/JwtUtils'; /* TAHA */
import SettingsPanel from './SettingsPanel';
const Filebar = () => {
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
        padding: 0,
        position: 'relative'

    };

    const sendServerButton = {
        color: '#fff'
    };

    /* TAHA */

    const disabledButton = {
        backgroundColor: "grey",
        cursor: ""
    };

    // const sendServerLabel = {
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   width: '100%',
    //   height: '100%',
    // };


    const docStyle = {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-start"

    };

    const listItemStyle = {
        padding: 0,
        margin: 0,
        // marginRight: '-80%',

    };

    const docDeleteStyle = {
        color: '#888'
    };

    // ---------------------------

    // 20/09/23
    const [open, setOpen] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    // const toggleSidebar = () => {
    //   setIsSidebarOpen(!isSidebarOpen);
    //   dispatch(toggleSidebarClick())
    // };

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

    // < 21/09/23

    const dispatch = useDispatch();
    const filesUpload = useSelector(state => state.upload.files);
    const files = useSelector(state => state.Files.data);

    /* TAHA */

    const isUploaded = filesUpload?.length !== 0;
    const isSelected = selectedFilesFromServer?.length !== 0;

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, []);

    const handleUploadButtonClick = () => {
        if (filesUpload.length > 0) {
            dispatch(sendFilesToServer());
        }
        dispatch(clearUploadedFiles())
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
    /* TAHA */ const handleLogout = () => {
        JwtUtils.logOut();
    };

    const isSidebarOpened = useSelector(state => state.upload.isSidebarOpened);

    return (
        <div className="filebar-container">
            <div className='fbc-top'>
                <Button variant='outlined' className='fbc-modal-button'>
                    Upload New File
                </Button>
                <List className="fbc-top-file-list-container"> {files?.map(el => (
                    <div key={el} className='uploaded-item-container'>
                        {el}

                        <div className='icon-container'>
                            <Checkbox
                                style={checkStyle}
                                edge="start"
                                checked={selectedFilesFromServer.includes(el)}
                                onChange={() => handleServerFileSelect(el)}
                            />
                            <SettingsPanel el={el} />
                        </div>

                    </div>
                ))}
                </List>
                <Button variant='outlined' className='fbc-modal-button'>
                    Send Selected Files
                </Button>
            </div>
            <div className='fbc-bottom'>
                <Button variant='outlined' className='fbc-modal-button'>
                    Category
                </Button>
                <Button variant='outlined' className='fbc-modal-button'>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Filebar