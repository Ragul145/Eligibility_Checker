import { TextField } from "@mui/material";
import React from "react";

function CustomTextFields({ lable, type, handleChange, value }) {
  return (
    <TextField
      label={lable}
      variant="outlined"
      type={type}
      onChange={(event) => handleChange(event.target.value)}
      value={value}
      fullWidth
    />
  );
}

export default CustomTextFields;
