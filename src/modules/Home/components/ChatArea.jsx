import React from 'react'
import "../style/chatarea.css"
import { TextField } from '@mui/material'
import Sidebar from './Sidebar'
import Filebar from '../../Chatbot-SlideBar/components/Filebar'
import person from "../../../assets/images/person1.jpg"
import bot from "../../../assets/images/bot.jpg"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
const ChatArea = () => {
    return (
        <div className="chatbot-container">
            {/* <div className="cbc-left"></div> */}
            <Sidebar />
            <div className="cbc-main">
                <div className="cbc-messages-container">
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            <img src={person} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            <img src={bot} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                            <div className="cbc-mb-actions">
                                <div className="cbc-mb-action">
                                    <ContentCopyOutlinedIcon />
                                </div>
                                <div className="cbc-mb-time"></div>
                            </div>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            <img src={person} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            <img src={bot} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            <img src={person} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            <img src={bot} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            <img src={bot} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            <img src={person} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-user">
                        <div className="cbc-mu-image">
                            <img src={bot} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mu-text">
                            <p className="cbc-mu-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
                    <div className="cbc-message-bot">
                        <div className="cbc-mb-image">
                            <img src={person} alt="" className='cbc-mu-image-item'/>
                        </div>
                        <div className="cbc-mb-text">
                            <p className="cbc-mb-text-item">
                                This code will give your div a 50px by 50px size with a background image that is scaled down or up to fit perfectly within that container while maintaining its aspect ratio.
                            </p>
                        </div>
                    </div>
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