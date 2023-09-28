import React from 'react'
import "../style/chatarea.css"
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar'
import Filebar from '../../Chatbot-SlideBar/components/Filebar'
import person from "../../../assets/images/person1.jpg"
import bot from "../../../assets/images/bot.jpg"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
import MessageBot from './MessageBot'
import MessageUser from './MessageUser'

const ChatArea = () => {
    const messages = ['bot',"2",'bot',"4"]
    console.log(messages)
    return (
        <div className="chatbot-container">
            <Sidebar />
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    {messages.map((msg,index)=>{
                        if (msg === 'bot' ) return (
                        <MessageUser item={msg} key={index}/>)
                        return (
                            <MessageBot item={msg} key={index} />
                        )
                    })}
                </div>
                <div className="cbc-form">
                    <TextField
                        label="Send a message ..."
                        className='cbc-form-item-textField'
                        multiline
                        maxRows={4}
                        fullWidth
                        InputProps={{
                            style: {
                                textAlignVertical: 'top', // Align text to the top
                            },
                        }}
                    />
                </div>
            </div>
            {/* <div className="cbc-right"></div> */}
            <Filebar />
        </div>
    )
}

export default ChatArea