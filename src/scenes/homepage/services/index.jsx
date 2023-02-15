import { Box } from "@mui/material"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedPage } from "@/state"
import MainSectionContainer from "@/components/MainSectionContainer"

const Services = () => {
  const dispatch = useDispatch()
  return (
    <motion.div onViewportEnter={() => dispatch(setSelectedPage("servicos"))}>
      <MainSectionContainer id="servicos">
        <Box height="1500px" width="100vw" sx={{ backgroundColor: "yellow" }}>
          <div>Services</div>
        </Box>
      </MainSectionContainer>
    </motion.div>
  )
}

export default Services
