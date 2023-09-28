import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const DropUpMenu = () => {
    const options = [
        { src: "https://www.svgrepo.com/show/248851/united-states.svg", alt: "EN" },
        { src: "https://www.svgrepo.com/show/248840/netherlands.svg", alt: "Dutch" },
        { src: "https://www.svgrepo.com/show/508678/flag-wf.svg", alt: "FR" }
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(options[0]); // Default to the first image

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        if (option) {
            setSelectedItem(option);
        }
        setAnchorEl(null);
    };

    return (
        <div style={{ position: 'relative', height: '200px' }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{ position: 'absolute', bottom: 0, display: 'flex', alignItems: 'center' }}
            >
                <img className='langImg' src={selectedItem.src} alt={selectedItem.alt} width="30" />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose()}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
            >
                {options.map((option, index) => (
                    <MenuItem key={index} onClick={() => handleClose(option)}>
                        <img className='langImg' src={option.src} alt={option.alt} width="30" />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default DropUpMenu;
