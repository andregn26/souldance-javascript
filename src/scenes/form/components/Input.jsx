import React from "react"
import { Field, ErrorMessage } from "formik"
import TextError from "./TextError"
import { Box, TextField, FormHelperText, useTheme } from "@mui/material"

const Input = (props) => {
  const { label, name, helper, ...rest } = props
  const theme = useTheme()
  return (
    <Box
      className="form-control"
      sx={{
        width: "100%",
        color: theme.palette.text.primary,
      }}
    >
      <TextField fullWidth id={name} name={name} label={label} {...rest} />
      <FormHelperText>{helper}</FormHelperText>
      <ErrorMessage component={TextError} name={name} />
    </Box>
  )
}

export default Input
