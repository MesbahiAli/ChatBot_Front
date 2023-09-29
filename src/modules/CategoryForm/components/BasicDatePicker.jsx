import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
const BasicDatePicker = ({sx,changeHandler,value,onBlur,name}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateField']} sx={{margin:0,padding:0}} >
        <DateField onBlur={onBlur} name={name} onChange={changeHandler} value={value} sx={{...sx,margin:0,padding:0}} fullWidth  label="Submission date" InputLabelProps={{ style: { backgroundColor: "white", paddingTop: "5px", borderRadius: "5px", color: "black" } }} />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default BasicDatePicker