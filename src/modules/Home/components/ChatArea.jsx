import React from 'react'
import "../style/chatarea.css"
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar'
import Filebar from '../../Chatbot-SlideBar/components/Filebar'
import person from "../../../assets/images/person1.jpg"
import bot from "../../../assets/images/bot.jpg"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
import MessageBot from './MessageBot'
import MessageUser from './MessageUser'
import SendIcon from '@mui/icons-material/Send';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const ChatArea = () => {
    const dispatch = useDispatch();
    const [message,setMessage] = useState("")
    const isSendFileSuccess = useSelector(state => state.Selected.isSuccess); /* TAHA */
    const messagesEndRef = useRef(null);  // To auto-scroll
    const handleMessageChange = (e) => isSendFileSuccess ? setMessage(e.target.value) : console.log("insert a file first");

    const messages = ['bot', "2", 'bot', "4"]
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);
    useEffect(() => {//for key down input form
        const enter = (event) => {
            if (event.keyCode === 13 && !event.shiftKey) {
                event.preventDefault(); // Prevent the default form submission
                console.log("message sent"+message)
            }
        }
        document.getElementById("cbc-form-input").addEventListener("keydown", enter);
        return () => {
            document.getElementById("cbc-form-input").removeEventListener("keydown", enter);
        }
    }, [])
    useEffect(() => {
        if (isSendFileSuccess) {
            document.getElementById("textFieldd").focus();
        }
    }, [isSendFileSuccess])
    console.log(messages)
    return (
        <div className="chatbot-container">
            <Sidebar />
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    {messages.map((msg, index) => {
                        if (msg === 'bot') return (
                            <MessageUser item={msg} key={index} />)
                        return (
                            <MessageBot item={msg} key={index} />
                        )
                    })}
                </div>
                <div className="cbc-form">
                    <TextField
                        label={isSendFileSuccess ? "Send a message ..." : "Send a file first"}
                        
                        className='cbc-form-item-textField'
                        multiline
                        maxRows={4}
                        fullWidth
                        id='cbc-form-input'
                        InputProps={{
                            style: {
                                textAlignVertical: 'top', // Align text to the top
                            },
                        }}
                        onChange={handleMessageChange}
                        value={message}

                    />
                    <IconButton
                    className={isSendFileSuccess ? 'cbc-form-icon-button' : 'cbc-form-icon-button inactive'}
                    >
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
            {/* <div className="cbc-right"></div> */}
            <Filebar />
        </div>
    )
}

export default ChatArea