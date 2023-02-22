import FormikContainer from "./components/FormikContainer"
import MainSectionContainer from "@/components/MainSectionContainer"
import CardOne from "@/components/Cards"
import WidthContainer from "@/components/WidthContainer"
import FormImage from "../../assets/images/form_image.jpg"
import { Box, useMediaQuery } from "@mui/material"

const FormPage = () => {
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  return (
    <MainSectionContainer>
      <WidthContainer>
        {/* Width of the box that contains all the form elements */}
        <Box mx="auto">
          {/* the box that contains all the form elements */}
          <CardOne
            elevation={4}
            sx={
              isNonMobile1200
                ? {
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    height: "80vh",
                  }
                : {
                    display: "grid",
                    gridTemplateRows: "repeat(12, 1fr)",
                    height: "90vh",
                  }
            }
          >
            {/* Form */}
            <Box
              sx={
                isNonMobile1200
                  ? {
                      gridColumn: "span 4",
                      justifyItems: "center",
                      padding: "2rem 3rem",
                    }
                  : {
                      gridRow: "span 10",
                      justifyItems: "center",
                      padding: "2rem 3rem",
                    }
              }
            >
              <FormikContainer />
            </Box>
            {/*  Social Media container */}
            <Box
              sx={
                isNonMobile1200
                  ? { gridColumn: "span 8" }
                  : { gridRow: "span 2" }
              }
            >
              {isNonMobile1200 ? (
                <Box
                  sx={{
                    backgroundImage: `url(${FormImage})`,
                    height: "100%",
                    backgroundSize: "cover",
                  }}
                ></Box>
              ) : null}
            </Box>
          </CardOne>
        </Box>
      </WidthContainer>
    </MainSectionContainer>
  )
}

export default FormPage
