import React from 'react'

const Modal = () => {
    const Backdrop = forwardRef((props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
                <div ref={ref} {...other} />
            </Fade>
        );
    });
    
    Backdrop.propTypes = {
        open: PropTypes.bool,
    };
    const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
    `;
    const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
    const style = (theme) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60vw",
        borderRadius: '12px',
        padding: '16px 32px 24px 32px',
        backgroundColor: '#0A1929',
        boxShadow: `0px 2px 24px '#000' `,
        display: "flex",
        flexDirection: "column"
    });
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
  return (
    <div>Modal</div>
  )
}

export default Modal