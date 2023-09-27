import React, { forwardRef, useEffect, useState } from 'react'
import "../style/category.css";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Fade, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, TextField, styled } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import PropTypes from 'prop-types';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from "yup";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch } from 'react-redux';
import BasicDatePicker from './BasicDatePicker';
import BasicSelectField from './BasicSelectField';

const listStyle = {
    minHeight: 50,
    borderRadius: 2,
    flex: 1,
    border: "1px solid black",
    backgroundColor: "#1f1f1f"
}
const docStyle = {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    height: 50,
    border: "none"
};

const listItemStyle = {
    padding: 0,
    margin: 0,
    height: 50,
    fontSize: 25
    // marginRight: '-80%',

};
const newBtnStyle = {
    backgroundColor: "#343e8b",
    color: "white",
    width: "150px"
}

const inputStyle = {
    color: "black",
    backgroundColor: "white",
    borderRadius: 1,
}

const Backdrop = forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
        <Fade in={open}>
            <div ref={ref} {...other} />
        </Fade>
    );
});

Backdrop.propTypes = {
    open: PropTypes.bool,
};
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
const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: '#0A1929',
    boxShadow: `0px 2px 24px '#000' `,
    display: "flex",
    flexDirection: "column"
});
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const FormDialog = ({ history }) => {
    const [open, setOpen] = useState(false);
    const [light, setLight] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const handleUploadCancel = () => {
        setSelectedFile(null);
    }
    // Get the dispatch function from the useDispatch hook
    const dispatch = useDispatch();
    const [stateSnackBar, setStateSnackBar] = useState({
        openSnackBar: false,
        vertical: "top",
        horizontal: "right",
        severity: "success",
        duration: 3000,
        message: "",
    });

    // Define a function that will handle the close event of the snackbar
    const handleCloseSnackBar = (event, reason) => {
        // If the reason for the close event was a clickaway, do nothing
        if (reason === "clickaway") {
            return;
        }

        // Otherwise, update the state to close the snackbar
        setStateSnackBar({ ...stateSnackBar, openSnackBar: false });
    };

    // Destructure some values from the stateSnackBar object
    const { openSnackBar, vertical, horizontal, severity, duration, message } =
        stateSnackBar;

    // Create a Formik form instance
    const formik = useFormik({
        // Set the initial form values
        initialValues: {
            username: "",
            password: "",
        },
        // Define the validation schema using Yup object methods
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Mot de passe est obligatoire"),
        }),
        // Define the function to be called when the form is submitted
        onSubmit: (values) => {
            const request = {
                payload: values,
                successCallBack: (response) => {
                    setStateSnackBar({
                        ...stateSnackBar,
                        severity: "success",
                        message: "record successful!",
                        openSnackBar: true,
                    });
                    //do success stuff
                },
                failCallBack: (error) => {
                    const messageError = error.message;
                    setStateSnackBar({
                        ...stateSnackBar,
                        severity: "error",
                        message: messageError,
                        openSnackBar: true,
                    });
                },
            };
            //do other stuff
        },
    });
    useEffect(() => {
        if (light) {
            document.body.classList.remove("dark");
        }else{
            document.body.classList.add("dark");
        }
    },[light])
    // Destructure properties from the formik object for use in the component
    const { errors, touched, handleSubmit, handleChange, values } = formik;
    return (
        <div className="form-dialogue">
            <div className="fd-buttons">
                <Button onClick={handleOpen}  className='fd-contained-btn' variant="contained" size="large" startIcon={<AddIcon />}>
                    New
                </Button>
                <Button className='fd-btn'  variant="outlined" size="large" startIcon={<RefreshIcon />}>
                    Refresh
                </Button>
                <Button className='fd-btn'  variant="outlined" size="large" startIcon={<FileDownloadIcon />}>
                    Export
                </Button>
            </div>
            <div className="fd-buttons">
                <Button  className='fd-contained-btn' variant="contained" size="large" startIcon={<LogoutIcon />}>
                    Logout
                </Button>
                <Button onClick={() => { history.push("/") }} className='fd-btn'  variant="outlined" size="large" startIcon={<ChatOutlinedIcon />}>
                    ChatBot
                </Button>
                <Button onClick={() => { setLight(prev=>!prev) }} className='fd-btn'  variant="outlined" size="large" startIcon={light ? <ModeNightIcon /> : <LightModeIcon/>}>
                    {light ? "Dark Mode" : "Light Mode"}
                </Button>
            </div>
            <StyledModal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: StyledBackdrop }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <h2 className='fdm-header'>Add New Record</h2>
                        <FormikProvider value={formik}>
                            <form className='fdm-form' onSubmit={handleSubmit}>
                                <div className="fdmf-top">
                                    <div className="fdmf-right">
                                        <TextField InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }} label="name of tender" variant="outlined" sx={inputStyle} />
                                        <BasicDatePicker label="submission date" sx={inputStyle}  />
                                        <TextField InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }} label="client" variant="outlined" sx={inputStyle} />
                                        <TextField InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }} label="contract type" variant="outlined" sx={inputStyle} />
                                    </div>
                                    <div className="fdmf-left">
                                        <BasicSelectField title={"Status"} items={["Tender Phase", "Submitted", "Evaluated", "In Progress", "Project Completed"]} />
                                        <BasicSelectField title={"Results"} items={["Won", "Lost"]} />
                                        <BasicSelectField title={"Category"} items={["Infrastructure", "Landscaping", "Public Works"]} />
                                        <Button onChange={handleFileChange} className='fd-btn' style={{ backgroundColor: "#343e8b", color: "white", fontSize: 20, height: 55 }} component="label" variant="contained" endIcon={<CloudUploadOutlinedIcon sx={{ height: 26, width: 26 }} />}>
                                            Upload file
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="fdmf-buttons">
                                    <List sx={listStyle}>
                                        {selectedFile &&
                                            <ListItem id='listItem' style={docStyle} >
                                                <ListItemText primary={selectedFile?.name} id='listItemSecondaryAction' style={listItemStyle} />
                                                <IconButton onClick={handleUploadCancel} sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: 'white' }}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </ListItem>
                                        }
                                    </List>
                                    <Button type='submit' className='fd-btn' style={{ backgroundColor: "#343e8b", color: "white", fontSize: 20 }} component="label" variant="contained" endIcon={<CheckIcon sx={{ height: 26, width: 26 }} />}>
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </FormikProvider>
                    </Box>
                </Fade>
            </StyledModal>
        </div>
    )
}

export default FormDialog
