// SearchBar.jsx

import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange, placeholder }) => {
    return (
        <TextField 
            placeholder={placeholder || 'Search...'} 
            value={value} 
            onChange={onChange} 
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
    );
}

export default SearchBar;
