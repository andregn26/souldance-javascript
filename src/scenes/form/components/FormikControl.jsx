import React from "react"
import Input from "./Input"
import SelectFormik from "./Select"
import Textarea from "./Textarea"
import Radio from "./Radio"
import Checkbox from "./Checkbox"

const FormikControl = (props) => {
  const { control, ...rest } = props
  switch (control) {
    case "input":
      return <Input {...rest} />
    case "textarea":
      return <Textarea {...rest} />
    case "select":
      return <SelectFormik {...rest} />
    case "radio":
      return <Radio {...rest} />
    case "checkbox":
      return <Checkbox {...rest} />
    default:
      return null
  }
}

export default FormikControl
