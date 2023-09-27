import React, { useState } from 'react';
import { Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPdfRequest } from '../../Chatbot-SlideBar/components/FileView.js/State/ViewActions';
import "../style/feed.css";

const Feed = () => {
  
  const dispatch = useDispatch();
  const summarize = useSelector((state) => state.Summarize.data);
  const pdfData = useSelector(state => state.Pdf.pdf);
  const isSidebarOpened = useSelector(state => state.upload.isSidebarOpened);
  return (
    <Box className="feed-container" p={{ xs: 0, md: 2 }}>
      <div>
        {/* <h1 style={{ textAlign: 'center' }}>summarize</h1>
     {summarize}

  <hr /> */}
        <h1 className='fc-h1' >View</h1>
        <hr className='fc-hr'/>
        {pdfData && <iframe
          src={`data:application/pdf;base64,${pdfData.pdf}`}
          title="application/pdf"
          className='fc-iframe'
        ></iframe>
        }
      </div>
    </Box>
  );
};

export default Feed;
