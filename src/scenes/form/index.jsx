import FormikContainer from "./components/FormikContainer"
import MainSectionContainer from "@/components/MainSectionContainer"
import CardOne from "@/components/Cards"
import WidthContainer from "@/components/WidthContainer"
import { Box } from "@mui/material"

const FormPage = () => {
  return (
    <MainSectionContainer>
      <WidthContainer>
        <Box maxWidth="500px" mx="auto">
          <CardOne elevation={4}>
            <FormikContainer />
          </CardOne>
        </Box>
      </WidthContainer>
    </MainSectionContainer>
  )
}

export default FormPage
