
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const DropUpMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ position: 'relative', height: '200px' }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{ position: 'absolute', bottom: 0 }}
            >
                Open Menu
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
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
                <MenuItem onClick={handleClose}><img className='langImg' src="https://www.svgrepo.com/show/248851/united-states.svg" alt="EN" width="30" /></MenuItem>
                <MenuItem onClick={handleClose}><img className='langImg' src="https://www.svgrepo.com/show/248840/netherlands.svg" alt="Dutch" width="30" /></MenuItem>
                {/* <MenuItem onClick={handleClose}>Option 3</MenuItem> */}
            </Menu>
        </div>
    );
};

export default DropUpMenu;
