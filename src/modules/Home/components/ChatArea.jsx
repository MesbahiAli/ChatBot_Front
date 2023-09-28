import React from 'react'
import "../style/chatarea.css"
import { TextField } from '@mui/material'
import Sidebar from './Sidebar'
import Filebar from '../../Chatbot-SlideBar/components/Filebar'
import person from "../../../assets/images/person1.jpg"
import bot from "../../../assets/images/bot.jpg"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
import MessageBot from './MessageBot'
import MessageUser from './MessageUser'

const ChatArea = () => {
    return (
        <div className="chatbot-container">
            {/* <div className="cbc-left"></div> */}
            <Sidebar />
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    {[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1].map((item,index)=>{
                        if (item % 2 === 0) return (<MessageUser item={item} key={index}/>)
                        return (
                            <MessageBot item={item} key={index} />
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