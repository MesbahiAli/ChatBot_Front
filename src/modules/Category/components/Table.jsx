import React, { useEffect, useState } from 'react';
import "../style/category.css";
import { DataGrid } from '@mui/x-data-grid';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryRequest } from '../StateTable/CategoryAction';

const Table = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.Category?.data);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        dispatch(getCategoryRequest());
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

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const rows = filteredData.map((item, index) => ({
        id: index,
        ...item
    }));

    const columns = [
        { field: 'Status', headerName: 'Status', width: 130 },
        { field: 'client', headerName: 'Client', width: 130 },
        { field: 'contract_type', headerName: 'Contract Type', width: 160 },
        { field: 'filename', headerName: 'File Name', width: 200 },
        { field: 'name_of_tender', headerName: 'Name of Tender', width: 150 },
        { field: 'submission_date', headerName: 'Submission Date', width: 200 }
    ];

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
            </div>
            <div className="fd-tc-box">
                <Box sx={{ height: 780, width: '100%', backgroundColor: "rgba(255, 255, 255, 0.61)", borderRadius: 4, color: "black" }}>
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
        </div>
    );
}

export default Table;
