import React, { useState, useRef } from 'react';
import "../style/chatarea.css";
import bot from "../../../assets/images/bot.jpg";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
import DoneIcon from '@mui/icons-material/Done';
const MessageBot = ({ item, index }) => {
    const [hover, setHover] = useState(false);
    const [copied,setCopied]=useState(false)
    const textRef = useRef(null);

    const handleCopy = () => {
        const text = textRef.current.textContent;
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
    
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text');
        });
    };
    

    return (
        <div className="cbc-message-bot" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="cbc-mb-image">
                <img src={bot} alt="" className='cbc-mu-image-item' />
            </div>
            <div className="cbc-mb-text">
                <p ref={textRef} className="cbc-mb-text-item">
                    {item.text}
                </p>
                <div className="cbc-mb-actions">
                    <div className={hover ? "cbc-mb-action" : "cbc-mb-action hidden"} onClick={handleCopy}>
                    {!copied ?<ContentCopyOutlinedIcon style={{ fontSize: "1rem" }} />:
                        <DoneIcon style={{ fontSize: "1rem" }} />}
                    </div>
                    <p className="cbc-mb-time"><TimeAgo date={new Date(item.timestamp)} /></p>
                </div>
            </div>
        </div>
    );
}

export default MessageBot;
