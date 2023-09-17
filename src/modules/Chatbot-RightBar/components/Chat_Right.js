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

const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';

function Chat_Right() {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages);
    const isLoading = useSelector((state) => state.chat.isLoading);

    const [showSpinner, setShowSpinner] = useState(false);
    const [userIsTyping, setUserIsTyping] = useState(false);
    const messagesEndRef = useRef(null);  // To auto-scroll

    useEffect(() => {
        dispatch({
            type: SEND_MESSAGE_SUCCESS,
            payload: {
                sender: 'bot',
                text: 'Hello! How can I assist you today?',
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
        formik.handleChange(e);
        setUserIsTyping(e.target.value.trim() !== "");
    }

    return (
        <Box className="chat-container" sx={{display: { xs: 'none', md: 'flex' }}}>
         <Box className="messages">
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
                {!isLoading && userIsTyping && <div>User is typing...</div>}
                <div ref={messagesEndRef}></div>
            </Box>

            <form onSubmit={formik.handleSubmit}>
                <Box display="flex" alignItems="center">
                    <TextField
                        fullWidth
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
                </Box>
            </form>
        </Box>
    );
}

export default Chat_Right;
