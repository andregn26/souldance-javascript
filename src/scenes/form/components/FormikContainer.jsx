import { useState } from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import {
  Box,
  TextField,
  useTheme,
  FormControl,
  Input,
  OutlinedInput,
  InputLabel,
  FormHelperText,
  InputAdornment,
  InputBase,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material"
import { MainButton } from "@/components/Buttons"

const FormikContainer = () => {
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  const [formValues, setFormValues] = useState(null)
  const theme = useTheme()
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  }

  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your first name")
      .required("First name is required"),
    lastName: yup
      .string("Enter your last name")
      .required("Last name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string("Enter your message").required("Message is required"),
  })

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data -->", values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {console.log(formik)}
          <Box display="flex" flexDirection="column" gap="2rem">
            {/* Name inputs */}

            {/* first name input */}
            <FormControl
              fullWidth
              variant="standard"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
            >
              <InputLabel
                sx={{ color: theme.palette.text.primary }}
                htmlFor="firstName"
              >
                Nome Próprio
              </InputLabel>
              <Input type="text" id="firstName" />
              <FormHelperText>
                {formik.touched.firstName && formik.errors.firstName}
              </FormHelperText>
            </FormControl>
            {/* last name input */}
            <FormControl
              fullWidth
              variant="standard"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            >
              <InputLabel
                sx={{ color: theme.palette.text.primary }}
                htmlFor="lastName"
              >
                Apelido
              </InputLabel>
              <Input id="lastName" />
              <FormHelperText>
                {formik.touched.lastName && formik.errors.lastName}
              </FormHelperText>
            </FormControl>

            {/* Email input */}
            <FormControl
              variant="standard"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
            >
              <InputLabel
                sx={{ color: theme.palette.text.primary }}
                htmlFor="email"
              >
                Email
              </InputLabel>
              <Input id="email" />
              <FormHelperText>
                {formik.touched.email && formik.errors.email}
              </FormHelperText>
            </FormControl>
            {/* Message input */}
            <FormControl
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
            >
              <InputLabel
                sx={{ color: theme.palette.text.primary }}
                htmlFor="message"
              >
                Mensagem
              </InputLabel>
              <OutlinedInput multiline rows={4} label="Mensagem" id="message" />
              <FormHelperText>
                {formik.touched.message && formik.errors.message}
              </FormHelperText>
            </FormControl>

            <Button
              component="label"
              fullWidth={isNonMobile800 ? false : true}
              variant="contained"
              sx={{
                "&.MuiButton-root:hover": {
                  backgroundColor: theme.palette.primary[600],
                },
              }}
            >
              ollaaaa
              <input hidden type="submit" />
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer
