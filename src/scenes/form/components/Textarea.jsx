import React from "react"
import { Field, ErrorMessage } from "formik"
import TextError from "./TextError"
import { TextField } from "@mui/material"

const Textarea = (props) => {
  const { label, name, ...rest } = props
  return (
    <div className="form-control">
      <TextField
        fullWidth
        name={name}
        id={name}
        label={label}
        multiline
        rows={4}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
