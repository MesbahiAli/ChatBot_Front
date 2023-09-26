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
import { IconButton, useMediaQuery } from '@mui/material';

const SettingsPanel = ({ el }) => {
  const checkStyle = {
    color: '#fff',
    margin: 0,
    padding: 0,
    position: 'relative'
  };
  const dispatch = useDispatch();
  const matches = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);
  const settingsPanelRef = useRef(null);
  const settingsButtonsRef = useRef(null);

  useEffect(() => {
    if (open && settingsPanelRef.current && settingsButtonsRef.current) {
      const buttonRect = settingsButtonsRef.current.getBoundingClientRect();
      const panelRect = settingsPanelRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      // Calculate the position
      let left = buttonRect.right + 10; // Adjust as needed
      let top = buttonRect.top + scrollY;

      // Apply the position to the panel
      if (matches) {
        left = left - 150;
        top = top + 30;
      }
      settingsPanelRef.current.style.left = `${left}px`;
      settingsPanelRef.current.style.top = `${top}px`;

      // Ensure the panel stays within the viewport
      if (top + panelRect.height > window.innerHeight) {
        settingsPanelRef.current.style.top = `${window.innerHeight - panelRect.height}px`;
      }
    }
  }, [open,matches]);


  const handleClickOutside = (event) => {
    if (settingsPanelRef.current.classList.contains('close')) {
      if (settingsButtonsRef.current.contains(event.target)) {
        setOpen(true);
      }
      return
    } else {
      if (settingsButtonsRef.current.contains(event.target)) {
        setOpen(false)
      } else {
        if (settingsPanelRef.current.contains(event.target)) {
          setTimeout(() => {
            setOpen(false)
          }, [300]);
        } else {
          setOpen(false)
        }
      }
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
    <IconButton style={checkStyle}   >
      <MoreVertIcon ref={settingsButtonsRef} />
      <div ref={settingsPanelRef} className={open ? "settings-panel open" : "settings-panel close"}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: "black", fontSize: "16px", padding: '5px', marginBottom: '5px' }} className='setting-items' onClick={() => { dispatch(requestSummarize(el)); }}  ><SummarizeIcon sx={{ mr: '5px' }} />Summarize</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: "black", fontSize: "16px", padding: '5px', marginBottom: '5px' }} className='setting-items' onClick={() => { dispatch(fetchPdfRequest(el)); }}  ><VisibilityIcon sx={{ mr: '5px' }} />View</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: "black", fontSize: "16px", padding: '5px' }} className='setting-items' onClick={() => { handleDelete(el) }}  ><DeleteIcon sx={{ mr: '5px' }} />Delete</div>
      </div>
    </IconButton>
  )
}

export default SettingsPanel