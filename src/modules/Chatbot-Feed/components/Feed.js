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
     {summarize}

{pdfData && <embed 
    src={`data:application/pdf;base64,${pdfData.pdf}#toolbar=0`} 
    type="application/pdf" 
    width="100%" 
    height="600px"
/>
            }
        </div>
    </Box>
  );
};

export default Feed;