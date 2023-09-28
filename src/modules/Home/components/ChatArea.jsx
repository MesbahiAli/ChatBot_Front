import React, { useState, useRef, useEffect } from 'react';
import "../style/chatarea.css";
import { IconButton, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Filebar from '../../Chatbot-SlideBar/components/Filebar';
import MessageBot from './MessageBot';
import MessageUser from './MessageUser';
import SendIcon from '@mui/icons-material/Send';
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS } from '../../../common/state/StatesConstants';

const ChatArea = () => {
    const dispatch = useDispatch();
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
    
    const messagesChat = useSelector(state => state.chat.messages);
    const messages = useSelector(state => state.MessageList.messages.messages);

    const data = messages && messages.length > 0 ? messages : messagesChat;

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);
    console.log(messagesChat)

    return (
        <div className="chatbot-container">
            <Sidebar />
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    {data.map((msg, index) => {
                        if (msg.sender === 'bot') return <MessageBot item={msg} index={index} />;
                        return <MessageUser item={msg} index={index} />;
                    })}
                    <div ref={messagesEndRef} />
                </div>
                <div className="cbc-form">
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
