import React from 'react'
import { forwardRef } from 'react';
import { Button, Fade, Modal, Box, styled } from '@mui/material';
import { useState } from 'react';
import StyledFormModal from '../../CategoryForm/components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modal } from '../../CategoryForm/state/CategoryAction';
import FormEdit from './FormEdit';
// const Backdrop = forwardRef((props, ref) => {
//     const { open, ...other } = props;
//     return (
//         <Fade in={open}>
//             <div ref={ref} {...other} />
//         </Fade>
//     );
// });


// const StyledBackdrop = styled((props) => (
//     <Fade {...props}>
//         <div {...props} />
//     </Fade>
// ))`
//     z-index: -1;
//     position: fixed;
//     inset: 0;
//     background-color: rgb(0 0 0 / 0.5);
//     -webkit-tap-highlight-color: transparent;
//   `;

const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
const ModalEdit = ({ open, setOpen }) => {

    const handleClose = () => setOpen(false);
    

    
    return (
        <StyledModal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            // slots={{ backdrop: StyledBackdrop }}
            id='model'
        >
            <FormEdit
                handleClose={handleClose}
            />
        </StyledModal>
    )
}

export default ModalEdit