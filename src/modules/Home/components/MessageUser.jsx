import React from 'react';
import "../style/chatarea.css";
import person from "../../../assets/images/person1.jpg";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';

const MessageUser = ({ item, index }) => {
    return (
        <div className="cbc-message-user">
            <div className="cbc-mu-image">
                <img src={person} alt="" className='cbc-mu-image-item' />
            </div>
            <div className="cbc-mu-text">
                <p className="cbc-mu-text-item">
                    {item.text}
                </p>
                <div className="cbc-mu-actions">
                    <div className="cbc-mu-action">
                        <ContentCopyOutlinedIcon />
                    </div>
                    <p className="cbc-mu-time"><TimeAgo date={new Date(item.timestamp)} /></p>
                </div>
            </div>
        </div>
    );
}

export default MessageUser;
