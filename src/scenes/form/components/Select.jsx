import React from "react"
import { Field, ErrorMessage } from "formik"
import TextError from "./TextError"
import {
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
  Box,
  FormControl,
  useTheme,
} from "@mui/material"

const CustomizedSelectForFormik = ({ children, form, field }) => {
  const { name, value } = field
  const { setFieldValue } = form

  return (
    <Select
      name={name}
      value={value}
      onChange={(e) => {
        setFieldValue(name, e.target.value)
      }}
    >
      {children}
    </Select>
  )
}

const SelectFormik = (props) => {
  const { label, name, options, labelId, ...rest } = props
  return (
    <Box className="form-control" sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Field
          name={name}
          labelId={labelId}
          component={CustomizedSelectForFormik}
          {...rest}
        >
          {options.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.key}
              </MenuItem>
            )
          })}
        </Field>
      </FormControl>
      <ErrorMessage component={TextError} name={name} />
    </Box>
  )
}

export default SelectFormik
