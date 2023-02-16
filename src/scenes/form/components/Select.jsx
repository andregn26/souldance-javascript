import React from "react"
import { Field, ErrorMessage } from "formik"
import TextError from "./TextError"
import { InputLabel, MenuItem, Select, FormHelperText } from "@mui/material"

const SelectFormik = (props) => {
  const { label, name, options, ...rest } = props
  return (
    <>
      <Select
        labelId={`${name}-label`}
        id={name}
        name={name}
        value={options}
        fullWidth
        {...rest}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.key}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>Required</FormHelperText>
      {/* <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="select" id={name} name={name} {...rest}>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
          })}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div> */}
    </>
  )
}

export default Select
