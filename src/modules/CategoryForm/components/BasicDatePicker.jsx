import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
const BasicDatePicker = ({sx}) => {
  const [value , setValue] = useState("");
  const changeHandler = (e) => setValue(e);
  console.log(value)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DateField']} sx={{margin:0,padding:0}} >
        <DateField onChange={changeHandler} value={value} sx={{...sx,margin:0,padding:0}} fullWidth  label="Submission date" />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default BasicDatePicker