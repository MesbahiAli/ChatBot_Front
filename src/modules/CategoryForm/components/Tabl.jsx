import React, { useEffect, useState } from 'react';
import "../style/category.css";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryRequest } from '../StateTable/CategoryAction';
import SearchBar from './SearchBar';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Table = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.Category?.data);

    const [search, setSearch] = useState(""); // Define search state

    // Define handleChange function
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        dispatch(getCategoryRequest());
    }, []);

    // Filter the rows based on the search value
    const rows = categoryData?.filter(row =>
        Object.values(row).some(value =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    ).map((item, index) => ({
        id: index,
        ...item
    }));

    const columns = [
        { field: 'Status', headerName: 'Status', width: 130 },
        { field: 'client', headerName: 'Client', width: 130 },
        { field: 'contract_type', headerName: 'Contract Type', width: 160 },
        {
            field: 'filename',
            headerName: 'File Name',
            width: 200,
            renderCell: (params) => {
                const basePath = "https://google.com";
                const pdfUrl = `${basePath}${params.value}`;

                return (
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" >
                        {params.value}
                    </a>
                );
            }
        },
        { field: 'name_of_tender', headerName: 'Name of Tender', width: 150 },
        { field: 'submission_date', headerName: 'Submission Date', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton
                        // onClick={() => handleEdit(params.row.id)}
                        color="primary"
                        aria-label="edit button"
                        className="edit-button"  /* Added class for IconButton if further styling is required */
                    >
                        <EditIcon className="edit-icon" />
                    </IconButton>
                    <IconButton
                        // onClick={() => handleDelete(params.row.id)}
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

    const handleEdit = (id) => {
        console.log('Edit:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete:', id);
    }


    return (
        <div className="fd-table-container">
            <Box sx={{ height: 780, width: '100%', bgcolor: "rgba(255, 255, 255, 0.61)", borderRadius: 4, color: "black" }}>
                <div className="search-Grid">
                    <SearchBar
                        value={search}
                        onChange={handleChange}
                        placeholder='Search In All Rows Here ...'
                    />
                </div>
                <DataGrid
                    style={{ border: "none" }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}

export default Table;
