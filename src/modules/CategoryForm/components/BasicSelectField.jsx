import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const BasicSelectField = ({items,title}) => {
    const [value,setValue] = useState("")
    return (
        <FormControl fullWidth>
            <InputLabel sx={{ backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" }} id={title}>{title}</InputLabel>
            <Select 
                InputLabelProps={{ style: { backgroundColor: "white", padding: "5px", borderRadius: "5px", color: "black" } }}
                labelId={title}
                value={value}
                label={title}
                sx={{color: "black",backgroundColor: "white",borderRadius: 1}}
                onChange={(e)=>setValue(e.target.value)}
            >
                {items.map((item,index)=>{
                    return (
                        <MenuItem value={item} key={index}>{item}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default BasicSelectField