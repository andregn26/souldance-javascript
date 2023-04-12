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
          {isNonMobile1200 ? (
            <CardOne
              elevation={4}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
              }}
            >
              {/* All form container */}
              <Box sx={{ gridColumn: "span 2", padding: "5rem" }}>
                <FormikContainer />
              </Box>

              <Box sx={{ gridColumn: "span 3" }}>
                <Box
                  sx={{
                    backgroundImage: `url(${FormImage})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 5%",
                  }}
                ></Box>
              </Box>

              {/*  Social Media container */}
            </CardOne>
          ) : (
            <CardOne elevation={4}>
              {/* All form container */}
              <Box>
                <FormikContainer />
              </Box>

              {/*  Social Media container */}
            </CardOne>
          )}
        </Box>
      </WidthContainer>
    </MainSectionContainer>
  )
}

export default FormPage
