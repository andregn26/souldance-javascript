import { Box, FormControl } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikControl from "./FormikControl"

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ]
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ]
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ]
  const initialValues = {
    firstName: "",
    lastName: "",
    selectOption: "",
    email: "",
    mensagem: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Preencha com o seu nome para continuar"),
    lastName: Yup.string().required(
      "Preencha com o seu apelido para continuar"
    ),
    email: Yup.string().required("Required"),
    mensagem: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  })
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data -->", values)
    onSubmitProps.resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => (
        <Form>
          <Box>
            <Box display="flex" gap="1rem">
              <FormikControl
                control="input"
                type="text"
                label="Nome Próprio*"
                name="firstName"
                helper="Campo Obrigatório"
              />
              <FormikControl
                control="input"
                type="text"
                label="Apelido*"
                name="lastName"
                helper="Campo Obrigatório"
              />
            </Box>

            <FormikControl
              control="input"
              type="email"
              label="E-mail*"
              name="email"
            />
            <FormikControl
              control="select"
              labelId="Assunto*"
              name="selectOption"
              options={dropdownOptions}
            />
            <FormikControl
              control="textarea"
              label="Mensagem*"
              name="mensagem"
            />

            <FormikControl
              control="radio"
              label="Radio topic"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox topics"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
