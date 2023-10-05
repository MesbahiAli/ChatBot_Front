import React, { useEffect, useState } from 'react';
import "../../CategoryForm/style/category.css";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button, InputAdornment, TextField,Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryRequest } from '../../CategoryForm/StateTable/CategoryAction';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ModalComp from '../../CategoryForm/components/Modal';
import { modal } from '../../CategoryForm/state/CategoryAction';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEdit from './ModalEdit';
import { fetchCategoriesRequest } from '../../Home/components/StateFetchCategoryForm/ActionFetchCategoryForm';
import { deleteFileApi } from '../../../common/services/DeleteService';


const Table = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.Category?.data);
    const isModal = useSelector(state => state.FilCategory?.modal);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        dispatch(getCategoryRequest());
        dispatch(fetchCategoriesRequest())

    }, []);

    useEffect(() => {
        if (categoryData && search === "") {
            setFilteredData(categoryData);
        } else if (search !== "" && categoryData) {
            const filtered = categoryData.filter((row) =>
                Object.values(row).some((value) => String(value).toLowerCase().includes(search.toLowerCase()))
            );
            setFilteredData(filtered);
        }
    }, [search, categoryData]);


    const rows = filteredData.map((item, index) => ({
        id: index,
        ...item
    }));

    const columns = [
        {
            field: 'filename',
            headerName: 'File Name',
            width: 200,
            renderCell: (params) => {
                const basePath = "https://google.com/";
                const pdfUrl = `${basePath}${params.value}`;

                return (
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="filename-link">
                        {params.value}
                    </a>
                );
            }
        }
        ,
        { field: 'Status', headerName: 'Status', width: 130 },
        { field: 'client', headerName: 'Client', width: 130 },
        { field: 'contract_type', headerName: 'Contract Type', width: 160 },
        { field: 'name_of_tender', headerName: 'Name of Tender', width: 150 },
        { field: 'submission_date', headerName: 'Submission Date', width: 200 },
        {
            field: 'Category',
            headerName: 'Category',
            width: 200,
            renderCell: (params) => {
                if (Array.isArray(params.row.categories)) {
                    
                    const displayText = params.row.categories.length <= 2 
                        ? params.row.categories.join(', ') 
                        : `${params.row.categories.slice(0, 2).join(', ')} +${params.row.categories.length - 2} more`;
                        
                    return (
                        <Tooltip title={params.row.categories.join(', ')} arrow>
                            <span>{displayText}</span>
                        </Tooltip>
                    );
                }
                return null;
            }
        },
        { field: 'results', headerName: 'results', width: 200 },

        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton
                        onClick={() => setEdit(true)}
                        color="primary"
                        aria-label="edit button"
                        className="edit-button"
                    >
                        <EditIcon className="edit-icon" />
                    </IconButton>
                    <IconButton
                        onClick={() => handleDelete(params.row.filename)}
                        color="primary"
                        aria-label="delete button"
                        className="delete-button"
                    >
                        <DeleteIcon className="delete-icon" />
                    </IconButton>

                </>
            ),
        },

    ];
    const handleDelete = (params) => {
        deleteFileApi(params)
        dispatch(getCategoryRequest())
    }

    const [selectedRowData, setSelectedRowData] = useState(null);

    const handleRowClick = (dataFromClickedRow) => {
        setSelectedRowData(dataFromClickedRow);
        setEdit(true);
    }



    return (
        <div className="fd-table-container">
            <div className="search-Grid">
                <TextField
                    placeholder='Search In All Rows Here ...'
                    value={search}
                    onChange={handleChange}
                    type='text'
                    className='sg-input'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon className='sg-input-icon' />
                            </InputAdornment>
                        )
                    }}
                />
                <div className="sg-buttons">
                    <Button className='sg-buttons-btn' onClick={() => dispatch(modal(true))} variant="contained" startIcon={<AddIcon />}>
                        New
                    </Button>
                    <Button className='sg-buttons-btn' onClick={() => dispatch(getCategoryRequest())} variant="contained" startIcon={<RefreshIcon />}>
                        Refresh
                    </Button>

                    <Button className='sg-buttons-btn' variant="contained" startIcon={<FileDownloadIcon />}>
                        Export
                    </Button>
                </div>
            </div>
            <div className="fd-tc-box">
                <Box sx={{ height: 780, width: '100%', backgroundColor: "rgba(255, 255, 255, 0.61)", borderRadius: 4, color: "black" }}>
                    <DataGrid
                        style={{ border: "none" }}
                        rows={rows}
                        columns={columns}
                        onRowClick={(params) => {
                            setSelectedRowData(params.row);
                        }}
                        color="primary"
                        aria-label="edit button"
                        className="edit-button"
                        pageSize={10} 
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick={true} 
                    />

                </Box>
            </div>
            <ModalComp open={open} setOpen={setOpen} />
            <ModalEdit open={edit} setOpen={setEdit} rowData={selectedRowData} />
        </div>
    );
}

export default Table;
