import React from 'react'
import "../style/sidebar.css";
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useState } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentChat, selectCurrentIndex } from '../state/ReducerHome';
import { updateChatTitle } from '../../UpdateSidebar/State/ActionFile';
import { selectChat } from '../state/ActionsHome';
import { fetchConversationsRequest } from './StateListe/ListeAction';
import { fetchMessagesRequest } from './StateMessage/MessageAction';

const ChatListItem = ({item,index}) => {
    // ... (rest of your states and effects)

    const dispatch = useDispatch();
    const chat = useSelector(selectCurrentChat);
    const stateIndex = useSelector(selectCurrentIndex);
    const [active, setActive] = useState(stateIndex === index);
    const handleClick = () => {
        dispatch(selectChat({chat:item,index:index}))
        dispatch(fetchMessagesRequest(index));

    }
    useEffect(() => {
        setActive(stateIndex === index);

    },[stateIndex,index]);

    // State to manage edit mode
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(item);

    // Function to toggle edit mode
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    // Function to handle text change
    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    // Function to handle submission of edited text
    const handleEditSubmit = () => {
        dispatch(updateChatTitle(index, editedText));
        setIsEditing(false); // Exit edit mode
    };

    return (
        <ListItemButton onClick={handleClick} className={active ? 'sc-main-list-item active' : 'sc-main-list-item '}>
            <ListItemIcon className='sc-main-list-item-icon'>
                <ChatBubbleOutlineOutlinedIcon className='sc-main-list-icon' />
            </ListItemIcon>

            {/* Conditionally render input field or text based on editing mode */}
            {isEditing ? (
                <input 
                    value={editedText} 
                    onChange={handleTextChange}
                    // onBlur={handleEditToggle} // optional: exit edit mode when input is blurred
                    onBlur={handleEditSubmit}
                    className='sc-main-list-item-input' 
                />
            ) : (
                <ListItemText className='sc-main-list-item-text' primary={editedText} />
            )}

            {active && (
                <ListItemIcon className='sc-main-list-item-icon' onClick={handleEditToggle}>
                    <DriveFileRenameOutlineOutlinedIcon className='sc-main-list-icon' />
                </ListItemIcon>
            )}
            {active && (
                <ListItemIcon className='sc-main-list-item-icon'>
                    <DeleteOutlinedIcon className='sc-main-list-icon' />
                </ListItemIcon>
            )}
        </ListItemButton>
    )
}

export default ChatListItem;