import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
const BasicDatePicker = ({sx}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateField']} sx={{margin:0,padding:0}} >
        <DateField sx={{...sx,margin:0,padding:0}} fullWidth InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }} label="Submission date" />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default BasicDatePicker