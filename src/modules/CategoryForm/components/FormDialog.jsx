import React, { forwardRef, useState } from 'react'
import "../style/category.css";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Fade, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, TextField, styled, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
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
import { useDispatch } from 'react-redux';
import { sendFileAndData } from '../state/CategoryAction';

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
const normalBtnStyle = {
    color: "white",
    borderColor: "white",

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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedFile, setSelectedFile] = useState(null);
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        formik.setFieldValue('file', file);
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
        initialValues: {
            name_of_tender: "",
            submission_date: "",
            client: "",
            contract_type: "",
            Status: "",
            results: "",
            category: "",
            file: null
        },
        // validationSchema: Yup.object().shape({
        //     nameOfTender: Yup.string().required('Name of Tender is required'),
        //     submissionDate: Yup.date().nullable().required('Submission Date is required'),
        //     client: Yup.string().required('Client is required'),
        //     contractType: Yup.string().required('Contract Type is required'),
        //     status: Yup.string().required('Status is required'),
        //     results: Yup.string().required('Results is required'),
        //     category: Yup.string().required('Category is required'),
        //     file: Yup.mixed().nullable().required('File is required'),
        // }),
        onSubmit: (values) => {
            dispatch(sendFileAndData(values));
            formik.resetForm(); 
        },
    });
    const { errors, touched, handleSubmit, handleChange, values, handleBlur, setFieldValue } = formik;
    return (
        <div className="form-dialogue">
            <div className="fd-buttons">
                <Button onClick={() => setOpen(prev => !prev)} sx={newBtnStyle} variant="contained" size="large" startIcon={<AddIcon />}>
                    New
                </Button>
                <Button className='fd-btn' sx={normalBtnStyle} variant="outlined" size="large" startIcon={<RefreshIcon />}>
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
                <Fade in={open}>
                    <Box sx={style}>
                        <h2 className='fdm-header'>Add New Record</h2>
                        <FormikProvider value={formik}>
                            <form className='fdm-form' onSubmit={handleSubmit}>
                                <div className="fdmf-top">
                                    <div className="fdmf-right">
                                        <TextField
                                            InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }}
                                            label="name of tender"
                                            variant="outlined"
                                            sx={inputStyle}
                                            name="name_of_tender"
                                            value={values.name_of_tender}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.name_of_tender && Boolean(errors.name_of_tender)}
                                            helperText={touched.name_of_tender && errors.name_of_tender}
                                        />
                                        <TextField
                                            type="date"
                                            name="submission_date"
                                            value={formik.values.submission_date}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            variant="outlined"  // This gives it the Material UI outlined style
                                            InputLabelProps={{ shrink: true }} // This is often needed for date inputs to ensure the label doesn't overlap the placeholder
                                        />
                                        <TextField
                                            InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }}
                                            label="client"
                                            variant="outlined"
                                            sx={inputStyle}
                                            name="client"
                                            value={values.client}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.client && Boolean(errors.client)}
                                            helperText={touched.client && errors.client}
                                        />
                                        <TextField
                                            InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }}
                                            label="contract type"
                                            variant="outlined"
                                            sx={inputStyle}
                                            name="contract_type"
                                            value={values.contract_type}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.contract_type && Boolean(errors.contract_type)}
                                            helperText={touched.contract_type && errors.contract_type}
                                        />
                                    </div>
                                    <div className="fdmf-left">
                                        <FormControl variant="outlined" sx={inputStyle}>
                                            <InputLabel>status</InputLabel>
                                            <Select
                                                label="status"
                                                name="Status"
                                                value={values.status}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.status && Boolean(errors.status)}
                                            >
                                                <MenuItem value="Tender Phase">Tender Phase</MenuItem>
                                                <MenuItem value="Submitted">Submitted</MenuItem>

                                                <MenuItem value="Evaluated">Evaluated</MenuItem>

                                                <MenuItem value="In Progress">In Progress</MenuItem>

                                                <MenuItem value="Project Completed">Project Completed</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl variant="outlined" sx={inputStyle}>
                                            <InputLabel>Results</InputLabel>
                                            <Select
                                                label="Results"
                                                name="results"
                                                value={values.results}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.results && Boolean(errors.results)}
                                            >
                                                <MenuItem value="Won">Won</MenuItem>
                                                <MenuItem value="Lost">Lost</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="outlined" sx={inputStyle}>
                                            <InputLabel>Category</InputLabel>
                                            <Select
                                                label="Category"
                                                name="category"
                                                value={values.category}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.category && Boolean(errors.category)}
                                            >
                                                <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                                                <MenuItem value="Landscaping">Landscaping</MenuItem>
                                                <MenuItem value="Public Works">Public Works</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <Button
                                            onChange={(event) => {
                                                handleFileChange(event)
                                            }
                                            }
                                            onBlur={formik.handleBlur}

                                            className='fd-btn'
                                            style={{ backgroundColor: "#343e8b", color: "white", fontSize: 20, height: 55 }}
                                            component="label"
                                            variant="contained"
                                            endIcon={<CloudUploadOutlinedIcon sx={{ height: 26, width: 26 }} />}
                                        >
                                            Upload file
                                            <VisuallyHiddenInput type="file" name="file" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="fdmf-buttons">
                                    <List sx={listStyle}>
                                        {selectedFile &&
                                            <ListItem id='listItem' style={docStyle} >
                                                <IconButton onClick={handleUploadCancel} sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: 'white' }}>
                                                    <CloseIcon />
                                                </IconButton>
                                                <ListItemText primary={selectedFile?.name} id='listItemSecondaryAction' style={listItemStyle} />
                                            </ListItem>
                                        }
                                    </List>
                                    <Button
                                        type='submit'
                                        className='fd-btn'
                                        style={{ backgroundColor: "#343e8b", color: "white", fontSize: 20 }}
                                        endIcon={<CheckIcon sx={{ height: 26, width: 26 }} />}
                                    >
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