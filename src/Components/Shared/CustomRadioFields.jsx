import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function CustomRadioFields({ options, lable, handleChange, value }) {
  return (
    <FormControl
      fullWidth
      sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}
    >
      <FormLabel>{lable}</FormLabel>
      <RadioGroup
        row
        value={value}
        onChange={(event) => handleChange(event.target?.value)}
      >
        {options?.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option?.value}
            control={<Radio />}
            label={option?.label}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioFields;
