import React from 'react'
import "../style/chatarea.css"
import person from "../../../assets/images/person1.jpg"

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import TimeAgo from 'react-timeago';
const MessageUser = ({item,key}) => {
    return (
        <div className="cbc-message-user">
            <div className="cbc-mu-image">
                <img src={person} alt="" className='cbc-mu-image-item' />
            </div>
            <div className="cbc-mu-text">
                <p className="cbc-mu-text-item">
                {/* {item}               */}
                Help me pick a birthday gift for my mom who likes gardening. But don't give me gardening tools – she already has all of them!
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