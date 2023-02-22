import { Box, FormControl, Input, Button, Stack } from "@mui/material"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikControl from "./FormikControl"
import { MainButton } from "@/components/Buttons"

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ]
  const initialValues = {
    firstName: "",
    lastName: "",
    assunto: "",
    email: "",
    mensagem: "",
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Preencha com o seu nome para continuar"),
    lastName: Yup.string().required(
      "Preencha com o seu apelido para continuar"
    ),
    email: Yup.string().required("Required"),
    assunto: Yup.string().required("Required"),
    mensagem: Yup.string().required("Required"),
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

            <FormikControl
              control="input"
              type="email"
              label="E-mail*"
              name="email"
            />

            <FormikControl
              control="select"
              labelId="Assunto"
              name="assunto"
              label="Assunto*"
              options={dropdownOptions}
            />

            <FormikControl
              control="textarea"
              label="Mensagem*"
              name="mensagem"
            />

            <Stack>
              <Button component="label">
                oOlaaa
                <Input type="submit" />
              </Button>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
