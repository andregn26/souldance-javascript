import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedPage } from "@/state"
import MainSectionContainer from "@/components/MainSectionContainer"
import { useTheme, Box } from "@mui/material"

const AboutUs = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  return (
    <motion.div onViewportEnter={() => dispatch(setSelectedPage("sobre-nos"))}>
      <MainSectionContainer id="sobre-nos">
        <Box
          height="1500px"
          width="100vw"
          sx={{ backgroundColor: theme.palette.background.alt }}
        >
          <div>Services</div>
        </Box>
      </MainSectionContainer>
    </motion.div>
  )
}

export default AboutUs
