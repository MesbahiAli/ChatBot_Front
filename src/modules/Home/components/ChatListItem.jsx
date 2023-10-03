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
import { selectChat } from '../state/ActionsHome';
import { fetchConversationsRequest } from './StateListe/ListeAction';
import { fetchMessagesRequest } from './StateMessage/MessageAction';
import { editConversationRequest } from './StateEditList/EditeActions';
import { deleteConversationRequest } from './StateDeleteList/DeleteAction';

const ChatListItem = ({item,index}) => {
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


    const handleEdit = () => {
        const newTitle = prompt("Enter the new title for the chat", item);
        if (newTitle) {
            dispatch(editConversationRequest({ id: index, title: newTitle }));
        }
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this chat?")) {
            dispatch(deleteConversationRequest(index));
        }
    };

    return (
        <ListItemButton onClick={handleClick} className={active ? 'sc-main-list-item active' : 'sc-main-list-item '}>
        <ListItemIcon className='sc-main-list-item-icon'>
            <ChatBubbleOutlineOutlinedIcon className='sc-main-list-icon' />
        </ListItemIcon>
        <ListItemText className='sc-main-list-item-text' primary={item} />
        {active ? (
            <>
                <ListItemIcon className='sc-main-list-item-icon' onClick={handleEdit}>
                    <DriveFileRenameOutlineOutlinedIcon className='sc-main-list-icon' />
                </ListItemIcon>
                <ListItemIcon className='sc-main-list-item-icon' onClick={handleDelete}>
                    <DeleteOutlinedIcon className='sc-main-list-icon' />
                </ListItemIcon>
            </>
        ) : null}
    </ListItemButton>
    )
}

export default ChatListItem