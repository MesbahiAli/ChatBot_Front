import React, { useState, useEffect, forwardRef } from 'react';
import "../style/filebar.css";
import JwtUtils from '../../../routing/JwtUtils'; /* TAHA */
import SettingsPanel from './SettingsPanel';
import { fetchConversationsRequest } from "../../Home/components/StateListe/ListeAction"
import StyledFormModal from '../../CategoryForm/components/Form'
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, FormControl, InputLabel, ListSubheader, MenuItem, Modal, Select, TextField, styled } from '@mui/material';
import { deleteFileApi } from '../../../common/services/DeleteService';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../../files/State/ActionsFile';
import { uploadFiles, sendFilesToServer, clearUploadedFiles, toggleSidebarClick } from '../state/UploadActions';
import { sendFileNamesRequest } from '../SlectedFile/State/actionSlect';
import { Button, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, useMediaQuery } from '@mui/material';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import { fetchCategoriesRequest } from '../../Home/components/StateFetchCategoryForm/ActionFetchCategoryForm';
import { getCategoryRequest } from '../../CategoryForm/StateTable/CategoryAction';
import { Close } from '@mui/icons-material';


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
    const [filteredCats, setFilteredCats] = useState([]);
    useEffect(() => {
        dispatch(getCategoryRequest());
        dispatch(fetchCategoriesRequest())

    }, []);
    const [filter, setFilter] = useState("");
    const [filtered, setFiltered] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const handleCloseDialog = (bool) => {
        setOpenDialog(false);
        setFiltered(bool);
    }
    const categoryData = useSelector(state => state.Category?.data);
    const categories = useSelector(state => state.FormCategory.categories.categories);

    useEffect(() => {
        if (filter!=="") {
            let filteredBycat = categories.filter(c => c.category !== filter);
            let filteredby = categories.filter(c => c.category === filter);
            filteredBycat.unshift(filteredby[0]);
            setFilteredCats(filteredby);
        } else {
            setFilteredCats(categories);
        }

    }, [categoryData, filter, categories])


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


    }
    useEffect(() => {
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
                <div className="sc-headers">
                    {/* <Button onClick={() => setOpenDialog(true)} variant="outlined" className='sc-headers-button' >{filtered ? "By " + filter : "Filter"}</Button> */}
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel sx={{color:"white"}}>Category</InputLabel>
                        <Select
                            label="Category"
                            name="categories"
                            className='select-fbc-top-tab'
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                            fullWidth
                        >
                            {categories?.map((category) => (
                                <MenuItem key={category.id} value={category.category}>
                                    {category.category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {filter!=="" && <IconButton className='sc-headers-iconButton' onClick={() => {setFiltered(false);setFilter("")}}>
                        <Close />
                    </IconButton>}
                </div>
                
                <List style={{ flex: 1 }} className="fbc-top-file-list-container">



                    {
                        filteredCats?.map((cat, ind) => {
                            if (categoryData?.filter(item => item.categories.includes(cat.category)).length !== 0) {
                                return (
                                    <div key={ind}>
                                        <ListSubheader component="span" style={{ lineHeight: "28px",display:"block", fontSize: "18px", color: "white", background: "transparent", padding: 0, margin: 0,width:"100%",textAlign:'center' }} >
                                            {cat.category}
                                        </ListSubheader>
                                        {
                                            categoryData?.map((el, index) => {
                                                if (el.categories.includes(cat.category)) {
                                                    return (
                                                        <div key={index} className='uploaded-item-container'>
                                                            {formatFileName(el.filename)}

                                                            <div className='icon-container'>
                                                                <Checkbox
                                                                    style={checkStyle}
                                                                    edge="start"
                                                                    checked={selectedFilesFromServer.includes(el.filename)}
                                                                    onChange={() => handleServerFileSelect(el.filename)}
                                                                />
                                                                <SettingsPanel el={el.filename} />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                return null
                                            })
                                        }
                                    </div>
                                )
                            }
                            return null
                        })
                    }

                    {categoryData?.some(item => item.categories.length === 0) && <ListSubheader component="span" style={{ lineHeight: "18px", fontSize: "10px", color: "white", background: "transparent", padding: 0, margin: 0 }} >
                        Unset
                    </ListSubheader>}
                    {
                        categoryData?.filter(item => item.categories.length === 0)?.map((it, ins) => {
                            return (
                                <div key={ins} className='uploaded-item-container'>
                                    {formatFileName(it.filename)}

                                    <div className='icon-container'>
                                        <Checkbox
                                            style={checkStyle}
                                            edge="start"
                                            checked={selectedFilesFromServer.includes(it.filename)}
                                            onChange={() => handleServerFileSelect(it.filename)}
                                        />
                                        <SettingsPanel el={it.filename} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </List>

                <Button style={isSelected ? sendServerButton : disabledButton} onClick={handleSendSelectedFilesFromServer} variant='outlined' className='fbc-modal-button'>
                    Confirme
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
            {/* <Dialog open={openDialog} onClose={() => handleCloseDialog(false)}>
                <DialogTitle>Edit Conversation Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a new title for the Conversation.
                    </DialogContentText>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel style={{ backgroundColor: "white", paddingTop: "5px", borderRadius: "5px", color: "black" }}>Category</InputLabel>
                        <Select
                            label="Category"
                            name="categories"
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                            fullWidth
                        >
                            {categories?.map((category) => (
                                <MenuItem key={category.id} value={category.category}>
                                    {category.category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleCloseDialog(true)} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog> */}
        </>
    )
}

export default FilebarTab