import {  Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

function CustomCheckedFields({label,value,handleChange}) {
  return (
    <FormControlLabel
    control={<Checkbox checked={value} onChange={handleChange}/>}
    label={label}
    />
  )
}

export default CustomCheckedFields