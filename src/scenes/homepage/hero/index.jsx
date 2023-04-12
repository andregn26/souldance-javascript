import { useSelector, useDispatch } from "react-redux"
import { setSelectedPage } from "@/state"
import { motion } from "framer-motion"
import HomePageText from "@/assets/HomePageText-01.svg"
import HomePageGraphic from "@/assets/HomePageGraphic1.png"
import MainSectionContainer from "@/components/MainSectionContainer"
import {
  useTheme,
  Box,
  Typography,
  useMediaQuery,
  ButtonGroup,
} from "@mui/material"
import WidthContainer from "@/components/WidthContainer"
import { MainButton, SecondaryButton } from "../../../components/Buttons"
import { useNavigate } from "react-router-dom"
import Bar from "@/scenes/homepage/hero/bar"

const Hero = () => {
  const theme = useTheme()
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Box sx={{ position: "relative" }}>
      <MainSectionContainer
        sx={{
          backgroundColor: theme.palette.background,
          flexDirection: "column",
        }}
      >
        <WidthContainer>
          <Box>
            <Box
              sx={
                isNonMobile800
                  ? {
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "8rem",
                      alignItems: "center",
                    }
                  : {
                      display: "flex",
                      flexDirection: "column",
                      gap: "4rem",
                    }
              }
            >
              <Box
                gridColumn
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3rem",
                }}
              >
                <Box
                  sx={
                    isNonMobile800 ? null : { textAlign: "center", mt: "5rem" }
                  }
                >
                  <Typography
                    // sx={isNonMobile ? { fontSize: "5rem" } : { fontSize: "2rem" }}
                    variant="h1"
                    className={theme.palette.mode === "dark" ? "glow" : null}
                    paddingBottom="1rem"
                    fontWeight="500"
                  >
                    SOULDANCE
                  </Typography>
                  <Typography sx={{ pt: "1rem" }} variant="h5" fontWeight="300">
                    Dança ao Ritmo da Tua Alma
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={
                      isNonMobile800
                        ? {
                            display: "flex",
                            gap: "1rem",
                            flexDirection: "row",
                            width: "100%",
                          }
                        : {
                            display: "flex",
                            gap: "1rem",
                            flexDirection: "column",
                            mx: "auto",
                            width: "100%",
                            maxWidth: "400px",
                          }
                    }
                  >
                    <MainButton onClick={() => navigate("/fala-connosco")}>
                      Junta-te a Nós
                    </MainButton>
                    <SecondaryButton>Horários</SecondaryButton>
                  </Box>
                </Box>
              </Box>
              <Box gridColumn>
                <img
                  src={HomePageGraphic}
                  alt="homePageGraphic"
                  className="hero-image"
                />
              </Box>{" "}
            </Box>
          </Box>
        </WidthContainer>{" "}
      </MainSectionContainer>{" "}
      {/* <Box
        sx={{
          width: "100%",
        }}
      >
        <Bar />
      </Box> */}
    </Box>
  )
}

export default Hero
