import Paper from "@mui/material/Paper"
import { styled } from "@mui/system"

const CardOne = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.card.default,
}))

export default CardOne
