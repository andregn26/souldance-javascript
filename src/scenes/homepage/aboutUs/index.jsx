import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedPage } from "@/state"
import MainSectionContainer from "@/components/MainSectionContainer"
import { useTheme, Box, useMediaQuery, Typography } from "@mui/material"
import WidthContainer from "@/components/WidthContainer"

const AboutUs = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  return (
    <motion.div onViewportEnter={() => dispatch(setSelectedPage("sobre-nos"))}>
      <MainSectionContainer id="sobre-nos">
        <WidthContainer>
          {isNonMobile1200 ? (
            <Box
              sx={isNonMobile1200 ? {
                display: "grid",
              }: {display: "flex"}}
            >
              <Typography variant="h2">MAIS QUE UMA ESCOLA DE DANÇA</Typography>
              <Typography variant="body1">
                Na SoulDance acreditamos que a dança é para todos e
                esforçamo-nos por criar um ambiente acolhedor e inclusivo onde
                os nossos alunos possam crescerir da rotina. Mais do que apenas
                um hobby, a dança é uma forma de nos expressarmos através do
                movimento. Quer estejas apenas a começar ou tenhas experiência,
                os nossos alunos e professores irá apoiar-te na tua viagem para
                desenvolveres a tua paixão pela dança. Quem dança é mais
                feliz...
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <Typography variant="h2">MAIS QUE UMA ESCOLA DE DANÇA</Typography>
              <Typography variant="body1">
                Na SoulDance acreditamos que a dança é para todos e
                esforçamo-nos por criar um ambiente acolhedor e inclusivo onde
                os nossos alunos possam crescerir da rotina. Mais do que apenas
                um hobby, a dança é uma forma de nos expressarmos através do
                movimento. Quer estejas apenas a começar ou tenhas experiência,
                os nossos alunos e professores irá apoiar-te na tua viagem para
                desenvolveres a tua paixão pela dança. Quem dança é mais
                feliz...
              </Typography>
            </Box>
          )}
        </WidthContainer>
      </MainSectionContainer>
    </motion.div>
  )
}

export default AboutUs
