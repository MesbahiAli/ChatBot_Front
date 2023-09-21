import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RobotLogo from "../../../assets/images/pngegg.png";
import RobotLogo1 from "../../../assets/images/pngegg (2).png";
import ChatSpinner from './Chat_Spinner';
import '../style/ChatStyle.css';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';

function Chat_Right() {

    /* ----- HERE ----- */

    const inputStyle = {
        color: 'green',
        fontSize: '25px',
        padding: 0,
        margin: 0
    };

    const userIsTypingStyle = {
        color: '#aaa',
        paddingLeft: '25px'
    };

    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    const isLoading = useSelector((state) => state.chat.isLoading);
    const isSendFileSuccess = useSelector(state => state.Selected.isSuccess);

    const [isChatOpen, setIsChatOpen] = useState(false);

    const [showSpinner, setShowSpinner] = useState(false);
    const [userIsTyping, setUserIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: {
                sender: 'bot',
                text: "Hell On sait depuis longtemps que travailler On sait depuis longtemps que travaillerOn sait depuis longtemps que travaillerOn sait depuis longtemps que travaillerOn sait depuis longtemps que travailler"
            },
        });

    }, [dispatch]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setShowSpinner(true);
            }, 200);
            return () => clearTimeout(timer);
        }
        setShowSpinner(false);
    }, [isLoading]);

    const formik = useFormik({
        initialValues: {
            user_input: '',
        },
        onSubmit: (values) => {
            if (values.user_input.trim()) {
                setUserIsTyping(false);
                dispatch({
                    type: SEND_MESSAGE_SUCCESS,
                    payload: {
                        sender: 'user',
                        text: values.user_input,
                        image: '/path-to-user-image.jpg',
                    },
                });

                dispatch({ type: SEND_MESSAGE_REQUEST, payload: { user_input: values.user_input } });
                formik.resetForm();
            }
        },
    });

    const handleInputChange = (e) => {
        if (isSendFileSuccess) {
            formik.handleChange(e);
            setUserIsTyping(e.target.value.trim() !== "");
        }
        return
    }
    useEffect(()=>{//for key down input form
        const enter = (event) => {
            if (event.keyCode === 13 && !event.shiftKey ) {
                event.preventDefault(); // Prevent the default form submission
                formik.handleSubmit(event);
            }
        }
        document.getElementById("textFieldd").addEventListener("keydown",enter);
        return () =>{
            document.getElementById("textFieldd").removeEventListener("keydown",enter);
        }
    },[])

    const [snackbarState, setSnackbarState] = useState({
        open: false,
        message: "",
        severity: "error", // can be 'success', 'info', 'warning', or 'error'
    });

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarState((prev) => ({ ...prev, open: false }));
    };

    const error = useSelector((state) => state.chat.error);

    useEffect(() => {
        if (error) {
            setSnackbarState({
                open: true,
                message: error,
                severity: "error",
            });
        }
    }, [error]);
    useEffect(()=>{
        if (isSendFileSuccess) {
            document.getElementById("textFieldd").focus();
        }
    },[isSendFileSuccess])
    let chatInput;
    if (isSendFileSuccess) {
        chatInput = <TextField id='textFieldd'
            fullWidth
            variant="outlined"
            {...formik.getFieldProps('user_input')}
            onChange={handleInputChange}
            placeholder="Type your message..."
            style={inputStyle}
            multiline
            maxRows={4}
        />
    } else {
        chatInput = <TextField id='textFieldd'
            fullWidth
            variant="outlined"
            {...formik.getFieldProps('user_input')}
            onChange={handleInputChange}
            placeholder={"please send a file first"}
            style={inputStyle}
            multiline
            maxRows={4}
            
            
        />
    }
    return (
        <>

            <Snackbar
                open={snackbarState.open}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarState.severity} variant="filled">
                    {snackbarState.message}
                </Alert>
            </Snackbar>

            {!isChatOpen ?
                <IconButton
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        borderRadius: "50%",
                        width: '60px',
                        height: '60px',
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 1000,
                        color: '#FFF',
                        backgroundColor: '#121212',  /* ------ HERE ----- */
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s, transform 0.3s', // Smooth color and size transition
                        '&:hover': {
                            backgroundColor: '#343e8b', /* ------ HERE ----- */
                            transform: 'scale(1.05)', // Slightly enlarges the button on hover
                        }
                    }}
                    aria-label={isChatOpen ? "Close chat" : "Open chat"}
                >
                    <img
                        src={RobotLogo1}
                        alt="Robot Logo"
                        style={{ width: '36px', height: '36px' }}
                    />
                </IconButton>
                : null}


            <Slide direction="up" in={isChatOpen} mountOnEnter unmountOnExit>
                <Box className="chat-container1" sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <Box className="messages1">
                        {messages.map((msg, index) => (
                            <div key={msg.id || index} className={`message-wrapper ${msg.sender} fade-in`}>
                                {msg.sender === 'bot' ? (
                                    <>
                                        <span className="message-bubble">{msg.text}</span>
                                        <img src={RobotLogo1} alt="Robot Logo" className="message-logo" />
                                    </>
                                ) : (
                                    <>
                                        <img src={RobotLogo} alt="User Logo" className="message-logo" />
                                        <span className="message-bubble">{msg.text}</span>
                                    </>
                                )}
                                <div className={`timestamp timestamp-${msg.sender}`}>
                                    {new Date().toLocaleTimeString()}
                                </div>
                            </div>
                        ))}
                        {showSpinner && (
                            <div className="message-loading">
                                <ChatSpinner />
                                <img src={RobotLogo1} alt="Robot Logo" className="message-logo" />
                            </div>
                        )}
                        {!isLoading && userIsTyping && <div id='userIsTyping' style={userIsTypingStyle}>User is typing...</div>}
                        <div ref={messagesEndRef}></div>
                    </Box>

                    <form onSubmit={formik.handleSubmit} >
                        <Box display="flex" alignItems="center" justifyContent="space-between" style={{ position: 'relative' }}>
                            <TextField
                                style={{ width: "100%" }}
                                variant="outlined"
                                {...formik.getFieldProps('user_input')}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="send-button"
                                aria-label="Send Message"
                            />
                            {isChatOpen &&
                                <IconButton
                                    onClick={() => setIsChatOpen(!isChatOpen)}
                                    sx={{
                                        display: { xs: 'flex', md: 'none' },
                                        width: '40px',
                                        height: '40px',
                                        color: '#FFF',
                                        backgroundColor: '#343e8b', /* ------ HERE ----- */
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                        transition: 'background-color 0.3s, transform 0.3s', // Smooth color and size transition
                                        '&:hover': {
                                            backgroundColor: '#232A5E', /* ------ HERE ----- */
                                            transform: 'scale(1.05)', // Slightly enlarges the button on hover
                                        }
                                    }}
                                    aria-label={isChatOpen ? "Close chat" : "Open chat"}
                                >
                                    <CloseIcon
                                        sx={{
                                            fontSize: '1.5rem',
                                        }}
                                    />
                                </IconButton>}
                        </Box>
                    </form>
                </Box>
            </Slide>
            <Box className="chat-container" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box className="messages" width="90%">
                    {messages.map((msg, index) => (
                        <div key={msg.id || index} className={`message-wrapper ${msg.sender} fade-in`}>
                            {msg.sender === 'bot' ? (
                                <>
                                    <div className={`timestamp timestamp-${msg.sender}`}>
                                        {new Date().toLocaleTimeString()}
                                    </div>
                                    <span className="message-bubble">{msg.text}</span>
                                    <img src={RobotLogo1} alt="Robot Logo" className="message-logo" />
                                </>
                            ) : (
                                <>
                                    <img src={RobotLogo} alt="User Logo" className="message-logo" />
                                    <span className="message-bubble">{msg.text}</span>
                                    <div className={`timestamp timestamp-${msg.sender}`}>
                                        {new Date().toLocaleTimeString()}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                    {showSpinner && (
                        <div className="message-loading">
                            <ChatSpinner />
                            <img src={RobotLogo1} alt="Robot Logo" className="message-logo" />
                        </div>
                    )}
                    {!isLoading && userIsTyping && <div>User is typing...</div>}
                    <div ref={messagesEndRef}>

                    </div>
                </Box>

                <form onSubmit={formik.handleSubmit}>
                    <Box display="flex" alignItems="center">
                        {chatInput}
                        <Button id='submitButton'
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="send-button"
                            aria-label="Send Message"
                        />
                    </Box>
                </form>
            </Box>
        </>
    );
}

export default Chat_Right;
