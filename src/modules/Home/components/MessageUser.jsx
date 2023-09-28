import React from 'react'
import "../style/chatarea.css"
import person from "../../../assets/images/person1.jpg"

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
const MessageUser = () => {
    return (
        <div className="cbc-message-user">
            <div className="cbc-mu-image">
                <img src={person} alt="" className='cbc-mu-image-item' />
            </div>
            <div className="cbc-mu-text">
                <p className="cbc-mu-text-item">
                    This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                </p>
                <div className="cbc-mu-actions">
                    <div className="cbc-mu-action">
                        <ContentCopyOutlinedIcon />
                    </div>
                    <p className="cbc-mu-time"><TimeAgo date={new Date("Wed, 27 Sep 2023 18:04:36 GMT")} /></p>
                </div>
            </div>
        </div>
    )
}

export default MessageUser