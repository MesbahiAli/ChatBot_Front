import React from 'react';
import { Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPdfRequest } from '../../Chatbot-SlideBar/components/FileView.js/State/ViewActions';
const Feed = () => {
  const dispatch = useDispatch();
  const summarize =useSelector((state) => state.Summarize.data);
  const pdfData = useSelector(state => state.Pdf.pdf);
console.log(pdfData)
  return (
   <Box bgcolor="#212229" color="#fff" flex={4} p={{ xs: 0, md: 2 }}>   
<div>
  <h1>summarize</h1>
     {summarize}

     <h1>View</h1>
{pdfData &&<iframe 
          src={`data:application/pdf;base64,${pdfData.pdf}`}           
          title="application/pdf"
          style={{ width: '100%', height: '600px', border: 'none' }} 
        ></iframe>
        }
        </div>
    </Box>
  );
};

export default Feed;