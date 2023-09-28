import React from 'react'
import "../style/chatarea.css";
import bot from "../../../assets/images/bot.jpg"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
import Typist from 'react-typist';
import { useState } from 'react';
import { useRef } from 'react';
const MessageBot = ({item,key}) => {
    const [hover,setHover] = useState(false);
    const textRef = useRef(null);

    const handleCopy = () => {
        const text = textRef.current.textContent;
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text');
        });
    }
    
    return (
        <div className="cbc-message-bot" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <div className="cbc-mb-image">
                <img src={bot} alt="" className='cbc-mu-image-item' />
            </div>
            <div className="cbc-mb-text">
                <p ref={textRef} className="cbc-mb-text-item">
                    {/* {item}                */}
                    Of course! Here are some 
                </p>
                <div className="cbc-mb-actions">
                    <div className={hover ? "cbc-mb-action " : "cbc-mb-action hidden"} onClick={handleCopy}>
                        <ContentCopyOutlinedIcon style={{fontSize:"1rem"}} />
                    </div>
                    <p className="cbc-mb-time"><TimeAgo date={new Date("Wed, 27 Sep 2023 18:04:36 GMT")} /></p>
                </div>
            </div>
        </div>
    )
}

export default MessageBot