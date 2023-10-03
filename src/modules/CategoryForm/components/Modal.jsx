import React from 'react'
import { forwardRef } from 'react';
import { Button, Fade, Modal, Box, styled } from '@mui/material';
import { useState } from 'react';
import StyledFormModal from './Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modal } from '../state/CategoryAction';
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
const ModalComp = ({ open, setOpen }) => {
    const dispatch = useDispatch()
    const isModal = useSelector(state => state.FilCategory?.modal);

    const handleClose = () => dispatch(modal(false));
    

    
    return (
        <StyledModal
            open={isModal}
            onClose={handleClose}
            closeAfterTransition
            // slots={{ backdrop: StyledBackdrop }}
            id='model'
        >
            <StyledFormModal
                handleClose={handleClose}
            />
        </StyledModal>
    )
}

export default ModalComp