import React from 'react'
import "../style/sidebar.css";
import { ListItemButton, ListItemIcon, ListItemText,Dialog,DialogTitle,DialogContent,TextField,Button,DialogActions,DialogContentText} from '@mui/material';
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
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const handleOpenEditDialog = () => {
        setNewTitle(item);
        setOpenEditDialog(true);
    };

    const handleCloseEditDialog = (confirm) => {
        if (confirm && newTitle) {
            dispatch(editConversationRequest({ id: index, title: newTitle }));
        }
        setOpenEditDialog(false);
    };

    const handleOpenDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = (confirm) => {
        if (confirm) {
            dispatch(deleteConversationRequest(index));
        }
        setOpenDeleteDialog(false);
    };

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
                    <ListItemIcon className='sc-main-list-item-icon' onClick={handleOpenEditDialog}>
                        <DriveFileRenameOutlineOutlinedIcon className='sc-main-list-icon' />
                    </ListItemIcon>
                    <ListItemIcon className='sc-main-list-item-icon' onClick={handleOpenDeleteDialog}>
                        <DeleteOutlinedIcon className='sc-main-list-icon' />
                    </ListItemIcon>
                </>
            ) : null}
        <Dialog open={openEditDialog} onClose={() => handleCloseEditDialog(false)}>
                <DialogTitle>Edit Conversation Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter a new title for the Conversation.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Conversation Title"
                        type="text"
                        fullWidth
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>








                    
                    <Button onClick={() => handleCloseEditDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleCloseEditDialog(true)} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openDeleteDialog} onClose={() => handleCloseDeleteDialog(false)}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this Conversation?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCloseDeleteDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleCloseDeleteDialog(true)} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
    </ListItemButton>
    )
}

export default ChatListItem