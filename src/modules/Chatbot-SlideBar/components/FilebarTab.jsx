import React, { useState, useEffect, forwardRef } from 'react';
import "../style/filebar.css";
import JwtUtils from '../../../routing/JwtUtils'; /* TAHA */
import SettingsPanel from './SettingsPanel';
import { fetchConversationsRequest } from "../../Home/components/StateListe/ListeAction"
import StyledFormModal from '../../CategoryForm/components/Form'
import { Box, Fade, Modal, styled } from '@mui/material';
import { deleteFileApi } from '../../../common/services/DeleteService';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../../files/State/ActionsFile';
import { uploadFiles, sendFilesToServer, clearUploadedFiles, toggleSidebarClick } from '../state/UploadActions';
import { sendFileNamesRequest } from '../SlectedFile/State/actionSlect';
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, useMediaQuery } from '@mui/material';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';


const FilebarTab = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleClose = () => setOpen(false);
    const handleUploadCancel = () => {
        setSelectedFile(null);
    }


    const Backdrop = forwardRef((props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        );
    });

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

    const messages = useSelector((state) => state.chat.messages);

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

    // < 21/09/23

    const dispatch = useDispatch();
    const filesUpload = useSelector(state => state.upload.files);
    const files = useSelector(state => state.Files.data);


    /* TAHA */

    const isUploaded = filesUpload?.length !== 0;
    const isSelected = selectedFilesFromServer?.length !== 0;

    useEffect(() => {
        dispatch(fetchDataRequest());
        dispatch(fetchConversationsRequest());

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
    const [bool, setBool] = useState(false)
    const matches = useMediaQuery("(max-width:820px)");
    const sidebarTrigger = () => {
        setBool(prev => !prev)
        const main = document.querySelector(".fbc-top");
        const footer = document.querySelector(".fbc-bottom");
        // const navbar = document.querySelector(".navbar-container");
        // navbar.classList.toggle("no-sidebar")
        setTimeout(() => {
            main.classList.toggle("none")
            footer.classList.toggle("none")
        }, 100)

    }
    useEffect(() => {
        console.log(matches)
        if (matches) {
            sidebarTrigger()

        }
    }, [matches])

    const formatFileName = (fileName) => {
        const fileExtension = fileName.split('.').pop();
        return `${fileName.substring(0, 6)}... .${fileExtension}`;
    }
    return (
        <>
            <div className='fbc-top'>
                <Button onClick={() => setOpen(prev => !prev)} variant='outlined' className='fbc-modal-button'>
                    Upload New File
                </Button>
                <List style={{flex:1}} className="fbc-top-file-list-container">
                    {files?.map(el => (
                        <div key={el} className='uploaded-item-container'>
                            {formatFileName(el)}

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

                <Button style={isSelected ? sendServerButton : disabledButton} onClick={handleSendSelectedFilesFromServer} variant='outlined' className='fbc-modal-button'>
                    Send selected files
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
                    selectedFile={selectedFile}
                    handleUploadCancel={handleUploadCancel}
                />

            </StyledModal>
        </>
    )
}

export default FilebarTab