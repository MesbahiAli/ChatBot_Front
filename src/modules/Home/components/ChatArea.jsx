import React, { useState, useRef, useEffect } from 'react';
import "../style/chatarea.css";
import { IconButton, TextField, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Filebar from '../../Chatbot-SlideBar/components/Filebar';
import MessageBot from './MessageBot';
import MessageUser from './MessageUser';
import SendIcon from '@mui/icons-material/Send';
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS } from '../../../common/state/StatesConstants';
import { requestToggle } from '../../Chatbot-RightBar/components/Togle/State/TogleAction';
import LanguageIcon from '@mui/icons-material/Language'; 

const ChatArea = () => {
    const dispatch = useDispatch();

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const error = useSelector(state => state.chat.error);
    const isLoading = useSelector(state => state.chat.isLoading);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleLanguageMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language) => {
        dispatch(requestToggle(language)); 
        handleLanguageMenuClose(); 
    };

    const [message, setMessage] = useState("");
    const isSendFileSuccess = useSelector(state => state.Selected.isSuccess);
    const messagesEndRef = useRef(null);
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendClick = () => {
        if (message !== "" && isSendFileSuccess) {
            dispatch({
                type: SEND_MESSAGE_SUCCESS,
                payload: {
                    sender: 'user',
                    text: message,
                },
            });
            dispatch({ type: SEND_MESSAGE_REQUEST, payload: { user_input: message } });
            setMessage("");
        }
    };


 
    
    useEffect(() => {
        const enter = (event) => {
            if (event.keyCode === 13 && !event.shiftKey) {
                event.preventDefault(); // Prevent the default form submission
                handleSendClick();
            }
        }
        document.getElementById("cbc-form-input").addEventListener("keydown", enter);
        return () => {
            document.getElementById("cbc-form-input").removeEventListener("keydown", enter);
        }
    }, [handleSendClick]);

    useEffect(() => {
        if (isSendFileSuccess) {
            document.getElementById("cbc-form-input").focus();
        }
    }, [isSendFileSuccess]);

    const rawMessagesChat = useSelector(state => state.chat.messages);
    const messagesFromApi = [
        { 
        "sender": "username",
        "response" : "answer_bot",
        "time": "time",
        },
        { 
        "sender": "bot",
        "response" : "answer_bot",
        "time": "time",
        },
        
      ]
    // useSelector(state => state.MessageList.messages.messages);

    const transformedMessagesFromApi = messagesFromApi.map(message => ({
        sender: message.sender, 
        text: message.response,
        timestamp: message.time  // changed from 'time' to 'timestamp'
    }));
    
    const data = [...(transformedMessagesFromApi || []), ...(rawMessagesChat || [])];

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [transformedMessagesFromApi]);  // <-- Changed from [messages] to [data] since that's what's being rendered.

    useEffect(() => {
        if (error) {
            setSnackbarMessage(error);
            setSnackbarOpen(true);
        }
    }, [error]);

    return (
        <div className="chatbot-container">
            <Sidebar />
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    {data.map((msg, index) => {
                        if (msg.sender === 'bot') return <MessageBot item={msg} index={index} />;
                        return <MessageUser item={msg} index={index} />;
                    })}
                    <div ref={messagesEndRef}></div>
                </div>
                <div className="cbc-form">
                    <IconButton onClick={handleLanguageMenuClick}>
                        <LanguageIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleLanguageMenuClose}
                    >
                        <MenuItem onClick={() => handleLanguageChange("eng")}>
                            English
                        </MenuItem>
                        <MenuItem onClick={() => handleLanguageChange("dutch")}>
                            Dutch
                        </MenuItem>
                        <MenuItem onClick={() => handleLanguageChange("fr")}>
                            French
                        </MenuItem>
                    </Menu>
                    <TextField
                        label={isSendFileSuccess ? "Send a message ..." : "Send a file first"}
                        className='cbc-form-item-textField'
                        multiline
                        maxRows={4}
                        fullWidth
                        id='cbc-form-input'
                        onChange={handleMessageChange}
                        value={message}
                    />
                    <IconButton
                        onClick={handleSendClick}
                        className={isSendFileSuccess ? 'cbc-form-icon-button' : 'cbc-form-icon-button inactive'}
                    >
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
            <Filebar />
        </div>
    );
}

export default ChatArea;
