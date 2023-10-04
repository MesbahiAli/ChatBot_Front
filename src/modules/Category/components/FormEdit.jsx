import React, { useState } from 'react';
import "../../CategoryForm/style/category.css"
import {
    TextField, FormControl, InputLabel, Select, MenuItem,
    Button, Box, List, ListItem, ListItemText, IconButton, styled
} from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { sendFileAndData } from '../../CategoryForm/state/CategoryAction';
import { useFormik } from 'formik';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { editCategory } from '../../Home/components/StateEditCategory/ActionsEditCategory';


const StyledBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: '#0A1929',
    display: "flex",
    flexDirection: "column"
}));
const StyledInput = styled(TextField)(({ theme }) => ({
    color: "black",
    backgroundColor: "white",
    borderRadius: 1,
}));

const StyledList = styled(List)(({ theme }) => ({
    minHeight: 50,
    borderRadius: 2,
    flex: 1,
    border: "1px solid black",
    backgroundColor: "#1f1f1f"
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    height: 50,
    border: "none"
}));
const inputStyle = {
    color: "black",
    backgroundColor: "white",
    borderRadius: 1,
};

const listStyle = {
    minHeight: 50,
    borderRadius: 2,
    flex: 1,
    border: "1px solid black",
    backgroundColor: "#1f1f1f"
};

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
};

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

const FormEdit = ({ handleClose, defaultValues }) => {
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState("null");
    const handleUploadCancel = () => {
        setSelectedFile(null);
    };





    const [isDialog, setIsDialog] = useState(false);
    const [newCat, setNewCat] = useState("");

    const handleClick = () => {
        setIsDialog(true);
    }

    const handleCloseDialog = (confirm) => {
        setIsDialog(false);
        if (confirm && newCat) {

            defaultValues.categories.push(newCat);
            setNewCat("");
        }
    }
    
    const formik = useFormik({
        initialValues: {
            name_of_tender: defaultValues.name_of_tender,
            submission_date: defaultValues.submission_date,
            client: defaultValues.client,
            contract_type: defaultValues.contract_type,
            Status: defaultValues.Status,
            results: defaultValues.results,
            categories: defaultValues.category,
            id:defaultValues.id,
        },
        validationSchema: Yup.object().shape({
            // Your validation schema if needed
        }),
        onSubmit: (values) => {
            const transformedPayload = {
                id: values.id,
                edited_params: {
                    name_of_tender: values.name_of_tender,
                    categories: [values.categories],
                    submission_date:values.submission_date,
                    client:values.client,
                    contract_type:values.contract_type,
                    Status:values.Status,
                    results:values.results,
                }
            };


            dispatch(editCategory(transformedPayload))
            console.log(transformedPayload)
            formik.resetForm();
            handleClose();
        },
    });

    const { errors, touched, handleSubmit, values, handleBlur, handleChange } = formik;

    return (
        <StyledBox>
            <h2 className='fdm-header'>Add New Record</h2>
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
                            sx={inputStyle}
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                        />
                        {/* <BasicDatePicker changeHandler={formik.handleChange} value={formik.values.submission_date} onBlur={formik.handleBlur} name="submission_date"/> */}
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
                            InputLabelProps={{ style: { backgroundColor: "white", paddingTop: "5px", borderRadius: "5px", color: "black" } }}
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
                            <InputLabel style={{ backgroundColor: "white", paddingTop: "5px", borderRadius: "5px", color: "black" }}>status</InputLabel>
                            <Select
                                label="status"
                                name="Status"
                                value={values.Status}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.Status && Boolean(errors.Status)}
                            >
                                <MenuItem value="Tender Phase">Tender Phase</MenuItem>
                                <MenuItem value="Submitted">Submitted</MenuItem>

                                <MenuItem value="Evaluated">Evaluated</MenuItem>

                                <MenuItem value="In Progress">In Progress</MenuItem>

                                <MenuItem value="Project Completed">Project Completed</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" sx={inputStyle}>
                            <InputLabel style={{ backgroundColor: "white", paddingTop: "5px", borderRadius: "5px", color: "black" }}>Results</InputLabel>
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
                            <InputLabel style={{ backgroundColor: "white", paddingTop: "5px", borderRadius: "5px", color: "black" }}>Category</InputLabel>
                            <Select
                                label="Category"
                                name="categories"
                                value={values.categories}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.categories && Boolean(errors.categories)}
                            >
                                {defaultValues.categories.map((category, index) => (
                                    <MenuItem key={index} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={handleClick}>
                                    Add new category
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <List sx={listStyle}>
                                <ListItem id='listItem' style={docStyle} >
                                    <ListItemText primary={defaultValues.filename} id='listItemSecondaryAction' style={listItemStyle} />
                                </ListItem>
                        </List>
                    </div>
                </div>
                <div className="fdmf-buttons edit">

                    <Button
                        type='submit'
                        className='fd-btn '
                        style={{ backgroundColor: "#343e8b", color: "white", fontSize: 20 }}
                        endIcon={<CheckIcon sx={{ height: 26, width: 26 }} />}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={handleClose}
                        className='fd-btn'
                        style={{ backgroundColor: "#343e8b", color: "white", fontSize: 20 }}
                        endIcon={<CloseIcon sx={{ height: 26, width: 26 }} />}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
            <Dialog open={isDialog} onClose={() => handleCloseDialog(false)}>
                <DialogTitle>Add New Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a new category.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Category Name"
                        type="text"
                        fullWidth
                        value={newCat}
                        onChange={e => setNewCat(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleCloseDialog(true)} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledBox>
    );
};

export default FormEdit;
