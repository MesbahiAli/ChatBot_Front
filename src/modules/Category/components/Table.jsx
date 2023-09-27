import React, { useEffect, useState } from 'react'
import "../style/category.css";
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Box, Input, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { columns } from '../data/columns';
import { rows } from '../data/rows';
const Table = () => {
    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //     maxColumns: 6,
    // });

    const [data,setData] = useState({columns:columns,rows:rows});
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const handleChange = (e) => setSearch(String(e.target.value));

    useEffect(() => {
        setFilteredData(data);
        if (search !== "" && data) {
            const filteredDataRows = data.rows.filter((row) => {
                if (String(row.id).toLowerCase().includes(search.toLowerCase()) || String(row.name).toLowerCase().includes(search.toLowerCase()) || String(row.email).toLowerCase().includes(search.toLowerCase()) || String(row.age).toLowerCase().includes(search.toLowerCase()) || String(row.city).toLowerCase().includes(search.toLowerCase()) || String(row.country).toLowerCase().includes(search.toLowerCase()) || String(row.company).toLowerCase().includes(search.toLowerCase()) || String(row.phone).toLowerCase().includes(search.toLowerCase()) || String(row.home).toLowerCase().includes(search.toLowerCase()) || String(row.rome).toLowerCase().includes(search.toLowerCase()) || String(row.tone).toLowerCase().includes(search.toLowerCase())) {
                    return row
                }
                return
            });
            setFilteredData(prev => { return { ...prev, rows: filteredDataRows } });
        }
    }, [search, data]);

    return (
        <div className="fd-table-container">
            <div className="search-Grid">
                <TextField placeholder='Search In All Rows Here ...' value={search} onChange={handleChange} type='text' className='sg-input' InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon className='sg-input-icon' />
                        </InputAdornment>
                    )
                }} />
            </div>
            <div className="fd-tc-box" >
                <DataGrid
                    {...filteredData}
                    initialState={{
                        ...filteredData.initialState,
                        pagination: { paginationModel: { pageSize: 10 } },
                    }}
                    autoPageSize
                    pagination={true}
                />
            </div>
        </div>
    )
}

export default Table
