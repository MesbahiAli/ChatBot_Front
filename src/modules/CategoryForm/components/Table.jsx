import React,{useEffect} from 'react'
import "../style/category.css";
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryRequest } from '../StateTable/CategoryAction'

const Table = () => {
    const dispatch = useDispatch();
    const categoryData = useSelector(state => state.Category?.data);
console.log(categoryData)
    useEffect(() => {
        dispatch(getCategoryRequest());
    }, []);

    const rows = categoryData.map((item, index) => ({
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
            <Box sx={{ height: 780, width: '100%',bgcolor:"rgba(255, 255, 255, 0.61)",borderRadius:4,color:"black" }}>
                <DataGrid
                    style={{border:"none"}}
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
    )
}

export default Table;
