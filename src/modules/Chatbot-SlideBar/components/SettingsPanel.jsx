import React, { useEffect, useRef, useState } from 'react'
import "../style/Sidebar.css";
import { fetchDataRequest } from '../../files/State/ActionsFile';
import { fetchPdfRequest } from './FileView.js/State/ViewActions';
import { requestSummarize } from '../../Chatbot-RightBar/components/Summarize/State/SummarizeActions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteFileApi } from '../../../common/services/DeleteService';
import DeleteIcon from '@mui/icons-material/Delete';

import SummarizeIcon from '@mui/icons-material/Summarize';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';

const SettingsPanel = ({el}) => {
    const checkStyle = {
        color: '#fff',
        margin: 0,
        padding: 0,
        position:'relative'
      };
    const dispatch = useDispatch();
    const [open,setOpen]= useState(false);
    const settingsPanelRef = useRef(null);
    const handleClickOutside = (event) => {
        if (settingsPanelRef.current && (!settingsPanelRef.current.contains(event.target) )) {
            setOpen(false);
        }else{
            setTimeout(()=>{
                setOpen(false);
              },[800])
        }
      };
    
      useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    const handleDelete = (filename) => {
        deleteFileApi(filename)
          .then(response => {
            dispatch(fetchDataRequest());
          })
          .catch(error => {
            console.error("Error deleting file:", error);
          });
      };
    return (
        <IconButton style={checkStyle} onClick={() => { setOpen(prev => !prev) }}  >
            <MoreVertIcon />
            <div ref={settingsPanelRef} className={open ? "settings-panel open" : "settings-panel close"}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: "black", fontSize: "16px",padding:'5px',marginBottom:'5px' }} className='setting-items' onClick={() => {setOpen(false); dispatch(requestSummarize(el));  }}  ><SummarizeIcon sx={{mr:'5px'}} />Summarize</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: "black", fontSize: "16px",padding:'5px',marginBottom:'5px' }} className='setting-items' onClick={() => {setOpen(false); dispatch(fetchPdfRequest(el));  }}  ><VisibilityIcon sx={{mr:'5px'}}/>View</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: "black", fontSize: "16px",padding:'5px' }} className='setting-items' onClick={() => { handleDelete(el); setOpen(false) }}  ><DeleteIcon sx={{mr:'5px'}}/>Delete</div>
            </div>
        </IconButton>
    )
}

export default SettingsPanel